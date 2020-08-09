import React from 'react'
import { NumItemType } from './NumberPannelItem'
import Statist, { StatistType } from './Statist'
import Ads from './Ads'
import MapTap from './MapTap'
import MyEChart from '@/components/Chart/EChart'
import WrapArray from '@/utils/array'

const data = [
  { val: 100, type: NumItemType.CUR, delta: 100 },
  { val: 100, type: NumItemType.INPUT, delta: 100 },
  { val: 100, type: NumItemType.NoSumtu, delta: 100 },
  { val: 100, type: NumItemType.AccCurr, delta: 100 },
  { val: 100, type: NumItemType.AccDead, delta: 100 },
  { val: 100, type: NumItemType.AccCure, delta: 100 },
]

const options = {
  tooltip: {
    //     foramtter: () => {
    //       return `<div class="map-tooltip" data-show-existing-count="true" data-index="32">
    // <div class="map-tooltip_left">
    // <p>省份：青海</p>
    // <p>现存确诊：0</p>
    // </div>
    // <div class="map-tooltip_right">
    // 详情<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAfRJREFUWAntl80rhFEUxmcopRQaJF+hSSSZbCxsLGwsrBSlKLKgJAtFsrHzB9j7K2SprJQSSST5JklRJPkav1vodLu90+Xc3Zx66tznnfP8Tm8z887EYtlSvAPpdDqFVlGhYuzfoliiBd0hU5uo+G9JClPAm9EtkrXFIaEQ7x8BeEZuIvod+hL/RIUJwAtiEdnucihTQPhHAJ6Xm4h+j77cP1FhAvCsWES2BxwqFBD+EYCn5SaiP6Sv8k9UmAA8JRaR7RGHGgWEfwTgCbmJ6E/oa/0TFSYAj6FPZNcZRr0Cwj8C8ChyLXWBn/RPVJgAPIw+kF1XGA0KCP8IwIPItdQ1fpN/osIE4AH0juy6wWhWQPhHAO5DrveUeUDXRSXmRF38x7UUs3HH/DreucMPZ3EH5pCrVjDzwpEdyQAnXZvgraF8x0g4C+AIcr1vNvALwpEdyQD7kevjvo1f5BgJZwHsQW/Irn2M0nBkRzLALvRib8L5GFU6RsJZADvQE7LrEiPyu0Z9K4Bt6MHehLP54mtUB0YFAjR/iX7+n9H+1j1da9Ss+jWASWQelHY9YrSrA6MCAVajU3sTzs+oM2pW/RrABDI/4O16xehWB2YKBJqLlpEs8xOjN9NssOvA42jpeyPziBgKBvMJZpFFNO4zk32t5h34AvYDXUk5pijRAAAAAElFTkSuQmCC">
    // </div>
    // </div>`
    //     },
    foramtter: '{b0}: {c0}<br />{b1}: {c1}',
  },
  series: [
    {
      type: 'map',
      map: 'china',
    },
  ],
}

function ChinaMap(): JSX.Element {
  return (
    <>
      <Statist type={StatistType.China} data={WrapArray(data)} />
      <Ads />
      <MapTap>国内疫情地图</MapTap>
      <MyEChart height={300} options={options} />
    </>
  )
}

export default ChinaMap
