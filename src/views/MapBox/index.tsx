import WhiteSpace from '@/components/WhiteSpace'
import React from 'react'
import ChinaMap from './ChinaMap'
import GlobalMap from './GlobalMap'
import MapBoxTop from './MapBoxTop'
import localStyle from './styles/mapbox.module.css'
import Tabs, { TabType } from './Tabs'

// 疫情地图
function MapBox(): JSX.Element {
  return (
    <div className={localStyle.mapBox}>
      <MapBoxTop />
      <Tabs target={TabType.China} />
      <ChinaMap />
      <WhiteSpace />
      <Tabs target={TabType.Global} />
      <GlobalMap />
    </div>
  )
}

export default MapBox
