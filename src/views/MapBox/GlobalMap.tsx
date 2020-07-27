import React from 'react'
import { NumItemType } from './NumberPannelItem'
import Statist, { StatistType } from './Statist'
import MapTap from './MapTap'
import WrapArray from '@/utils/array'

const data = [
  { val: 100, type: NumItemType.CUR, delta: 0 },
  { val: 100, type: NumItemType.AccCurr, delta: 0 },
  { val: 100, type: NumItemType.AccDead, delta: 0 },
  { val: 100, type: NumItemType.AccCure, delta: 0 },
]
function GlobalMap() {
  return (
    <>
      <Statist type={StatistType.Global} data={WrapArray(data)} />
      <MapTap>重点国家疫情数据</MapTap>
    </>
  )
}

export default GlobalMap
