import React from 'react'
import classNames from 'classnames'
import localStyle from './styles/tabs.module.css'

export enum TabType {
  China,
  Global,
}

function Tabs(props: { target: TabType }): JSX.Element {
  const { target } = props
  return (
    <div className={localStyle.tab}>
      <div className={classNames(localStyle.item, { [localStyle.current]: target === TabType.China })}>
        国内疫情数据
      </div>
      <div className={classNames(localStyle.item, { [localStyle.current]: target === TabType.Global })}>
        全球疫情数据
      </div>
    </div>
  )
}

export default Tabs
