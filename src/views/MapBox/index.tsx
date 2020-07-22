import WhiteSpace from '@/components/WhiteSpace'
import React from 'react'
import ChinaMap from './ChinaMap'
import GlobalMap from './GlobalMap'
import Marquee from './MapBoxTop'
import localStyle from './styles/mapbox.module.css'
import Tabs, { TabType } from './Tabs'

const marquee = [
  {
    src:
      'https://wechat.dxy.cn/news/view?noshare=false&watermark=false&nocopy=false&email=false&simuri=%2Fjapi%2Fweixin%2Fnews%2F48046%2F4FBu1HbXqqlZt%2Fdata&teamId=222',
    title: '数字新冠',
    msg: '7 月 20 日，世界因新冠而变',
  },
  { src: '#', title: '准备好了', msg: '电影院重开，想去又有点儿担心……' },
]

// 疫情地图
function MapBox(): JSX.Element {
  return (
    <div className={localStyle.mapBox}>
      <Marquee contents={marquee} />
      <Tabs target={TabType.China} />
      <ChinaMap />
      <WhiteSpace />
      <Tabs target={TabType.Global} />
      <GlobalMap />
    </div>
  )
}

export default MapBox
