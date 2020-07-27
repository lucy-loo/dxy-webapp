/* eslint-disable */
import React, { useMemo } from 'react'
import * as globalStyle from '@/styles/index.module.css'
import WrapArray from '@/utils/array'

interface ContentType {
  index: number
  tabHead: React.ReactNode
  tabContent: React.ReactElement<any>
}

function useRefedContent(
  eles: ContentType[]
): [Map<number, React.MutableRefObject<HTMLElement>>, React.ReactElement[]] {
  const contentArr: React.ReactElement[] = []
  const refMap = new Map(
    eles.map((ele) => {
      const ref = React.useRef<HTMLElement>()
      const RefedContent = React.forwardRef<HTMLElement>((props, ref2) => {
        return React.cloneElement(ele.tabContent, { ...props, ref: ref2 })
        // return <div ref={ref2}>{ele.tabContent}</div>;
      })
      contentArr.push(<RefedContent ref={ref} />)
      return [ele.index, ref]
    })
  )
  return [refMap, contentArr]
}

function Tab<TabIndexEnum>(props: { content: ContentType[] }): JSX.Element {
  const { content: propsContent } = props
  const tabRef = React.useRef<HTMLDivElement>()
  const [tabHeight, setTabHeight] = React.useState(0)
  const [currentTab, setCurrentTab] = React.useState<TabIndexEnum>()
  const [refMap, content] = useRefedContent(propsContent)
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
  return (
    <>
      <div className={globalStyle.tab} ref={tabRef}>
        <div className={globalStyle.inner}>
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
      {content && content.map((v, i) => <React.Fragment key={i}>{v}</React.Fragment>)}
    </>
  )
}

export default Tab

function InnerItem(props: React.HtmlHTMLAttributes<HTMLSpanElement> & { isOn: boolean }) {
  return (
    <span className={props.isOn ? globalStyle.on : null} onClick={(e) => props.onClick(e)}>
      {props.children}
      <i />
    </span>
  )
}
