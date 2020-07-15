import * as React from 'react'
import * as globalStyle from '@/styles/index.module.css'

function RealTimeAlert(): JSX.Element {
  return (
    <div className={globalStyle.realtime}>
      <div className={globalStyle.whiteSpace} />
      <p className={globalStyle.mapTap}>实时播报</p>
      <Tab />
      <WatchMore />
    </div>
  )
}

export default RealTimeAlert

function Tab() {
  return <div className={globalStyle.tab2} />
}

function WatchMore() {
  return <div className={globalStyle.watchMore} />
}
