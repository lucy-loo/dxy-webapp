/* eslint-disable */
import React, { useMemo, useCallback } from 'react'
import * as tabStyle from '@/styles/index.module.css'
import classNames from 'classnames'
import WrapArray from '@/utils/array'

interface ContentType {
  index: number
  tabHead: React.ReactNode
  tabContent: React.ReactElement<any>
}

function useRefedContent(
  eles: ContentType[],
  ref: React.MutableRefObject<HTMLElement>
): [Map<number, React.MutableRefObject<HTMLElement>>, React.ReactElement[]] {
  const [contentArr, setContentArr] = React.useState<React.ReactElement[]>([])
  const [refMap, setRefMap] = React.useState<Map<number, React.MutableRefObject<HTMLElement>>>(new Map())
  React.useEffect(() => {
    let contentArr = [] as React.ReactElement[],
      refMap

    refMap = new Map(
      eles.map((ele) => {
        const RefedContent = React.forwardRef<HTMLElement>((props, ref2) => {
          // console.log(ele.tabContent, props)
          const res = React.cloneElement(ele.tabContent, { ...props, ref: ref2 })
          console.log(res)
          return res
          // return <div ref={ref2}>{ele.tabContent}</div>;
        })
        contentArr.push(<RefedContent ref={ref} />)
        return [ele.index, ref]
      })
    )

    setContentArr(contentArr)
    setRefMap(refMap)
  }, [eles])
  return [refMap, contentArr]
}

function Tab<TabIndexEnum>(props: { content: ContentType[]; isFixed?: boolean }): JSX.Element {
  const { content: propsContent, isFixed } = props
  const tabRef = React.useRef<HTMLDivElement>()
  const [tabHeight, setTabHeight] = React.useState(0)
  const [currentTab, setCurrentTab] = React.useState<TabIndexEnum>()
  const [refMap, content] = useRefedContent(propsContent)
  const clsNames = useMemo(() => classNames(tabStyle.inner, { [tabStyle.fixed]: isFixed }), [isFixed])
  React.useEffect(() => {
    tabRef.current && setTabHeight(tabRef.current.clientHeight)
  }, [])
  const handleClickTabHead = React.useCallback(
    (ref: React.RefObject<HTMLDivElement>, i: TabIndexEnum) => {
      console.log('clicked', ref)

      if (!ref.current) return
      const headEle = ref.current
      window.scrollTo(0, headEle.offsetTop - tabHeight)
      setCurrentTab(i)
    },
    [tabHeight]
  )
  const res = (
    <>
      <div className={tabStyle.tab} ref={tabRef}>
        <div className={clsNames}>
          {propsContent.map((v, i) => (
            <InnerItem
              key={i}
              isOn={(currentTab as unknown) === v.index}
              onClick={handleClickTabHead.bind(this, refMap.get(v.index), v.index)}
            >
              {v.tabHead}
            </InnerItem>
          ))}
        </div>
      </div>
      {propsContent && propsContent.map((v, i) => <React.Fragment key={i}>{v.tabContent}</React.Fragment>)}
    </>
  )
  console.log(res)
  return res
}

export default Tab

function InnerItem(props: React.HtmlHTMLAttributes<HTMLSpanElement> & { isOn: boolean }) {
  return (
    <span className={props.isOn ? tabStyle.on : null} onClick={(e) => props.onClick(e)}>
      {props.children}
      <i />
    </span>
  )
}
