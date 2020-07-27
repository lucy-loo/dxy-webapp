import React, { useState, useEffect } from 'react'
import { NumItemType } from './NumberPannelItem'
import Statist, { StatistType } from './Statist'
import Ads from './Ads'
import MapTap from './MapTap'
import MyEChart from '@/components/Chart/EChart'
import WrapArray from '@/utils/array'

const data = [
  { val: 100, type: NumItemType.CUR, delta: 0 },
  { val: 100, type: NumItemType.INPUT, delta: 0 },
  { val: 100, type: NumItemType.NoSumtu, delta: 0 },
  { val: 100, type: NumItemType.AccCurr, delta: 0 },
  { val: 100, type: NumItemType.AccDead, delta: 0 },
  { val: 100, type: NumItemType.AccCure, delta: 0 },
]

const options = {}

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
