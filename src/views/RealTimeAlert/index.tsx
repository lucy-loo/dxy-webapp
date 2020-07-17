import React from 'react'
import globalStyle from '@/styles/index.module.css'
import WhiteSpace from '@/components/WhiteSpace'
import MapTap from '../MapBox/MapTap'

function RealTimeAlert(): JSX.Element {
  return (
    <div className={globalStyle.realtime}>
      <WhiteSpace />
      <MapTap>实时播报</MapTap>
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
