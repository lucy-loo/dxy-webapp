import React, { useMemo } from 'react'
import * as tabStyle from '@/styles/index.module.css'
import classNames from 'classnames'
interface ContentType {
  index: number
  tabHead: React.ReactNode
  tabContent: React.ReactElement<unknown>
}

function Tab(props: { content: ContentType[]; isFixed?: boolean }): JSX.Element {
  const { content: propsContent, isFixed } = props
  const tabRef = React.useRef<HTMLDivElement>()
  const [tabHeight, setTabHeight] = React.useState(0)
  const [currentTab, setCurrentTab] = React.useState<number>(0)

  const refedContent = useMemo(
    () =>
      propsContent.map((c) => {
        const ref = React.createRef<HTMLDivElement>()
        const ele = <div ref={ref}>{c.tabContent}</div>
        return { index: c.index, ref, ele }
      }),
    [propsContent]
  )
  const clsNames = useMemo(() => classNames(tabStyle.inner, { [tabStyle.fixed]: isFixed }), [isFixed])
  React.useEffect(() => {
    tabRef.current && setTabHeight(tabRef.current.clientHeight)
  }, [])
  const handleClickTabHead = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const targetIndex = event.currentTarget.id
      const ref = refedContent.find((v) => v.index + '' == targetIndex).ref.current
      const headEle = ref
      window.scrollTo(0, headEle.offsetTop - tabHeight)
      setCurrentTab(Number(targetIndex))
    },
    [tabHeight, refedContent]
  )
  const res = (
    <>
      <div className={tabStyle.tab} ref={tabRef}>
        <div className={clsNames}>
          {propsContent.map((v) => (
            <InnerItem key={v.index} id={v.index + ''} isOn={currentTab === v.index} onClick={handleClickTabHead}>
              {v.tabHead}
            </InnerItem>
          ))}
        </div>
      </div>
      {refedContent && refedContent.map((v) => <React.Fragment key={v.index}>{v.ele}</React.Fragment>)}
    </>
  )
  return res
}

export default Tab

function InnerItem(
  props: React.PropsWithChildren<{ id: string; isOn: boolean; onClick: (e: React.MouseEvent<HTMLSpanElement>) => void }>
) {
  const { isOn, children, id } = props
  return (
    <span id={id} className={isOn ? tabStyle.on : null} onClick={(e) => props.onClick(e)}>
      {children}
      <i />
    </span>
  )
}
