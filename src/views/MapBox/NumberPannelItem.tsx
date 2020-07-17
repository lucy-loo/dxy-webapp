import React from 'react'
import localStyle from './styles/numberpannel.module.css'

export enum NumItemType {
  CUR = 'CUR', // 现存确诊
  INPUT = 'INPUT', // 境外输入
  NoSumtu = 'NoSumtu', // 现存无症状
  AccCurr = 'AccCurr', // 累计确诊
  AccDead = 'AccDead', // 累计死亡
  AccCure = 'AccCure', // 累计治愈
}

function getNumberItemColor(type: NumItemType) {
  return {
    [NumItemType.CUR]: 'rgb(247, 76, 49)',
    [NumItemType.INPUT]: 'rgb(247, 130, 7)',
    [NumItemType.NoSumtu]: 'rgb(162, 90, 78)',
    [NumItemType.AccCurr]: 'rgb(174, 33, 44)',
    [NumItemType.AccDead]: 'rgb(93, 112, 146)',
    [NumItemType.AccCure]: 'rgb(40, 183, 163)',
  }[type]
}

function getTypeName(type: NumItemType) {
  return {
    [NumItemType.CUR]: '现存确诊',
    [NumItemType.INPUT]: '境外输入',
    [NumItemType.NoSumtu]: '现存无症状',
    [NumItemType.AccCurr]: '累计确诊',
    [NumItemType.AccDead]: '累计死亡',
    [NumItemType.AccCure]: '累计治愈',
  }[type]
}

function NumberItem(props: { num: number; sub: NumItemType; delta: number }) {
  const { num, sub, delta } = props
  const [color] = React.useState(getNumberItemColor(sub))
  return (
    <li>
      <div className={localStyle.createItem}>
        <div className={localStyle.createCount}>
          <b>
            较昨日
            {delta ? <em style={{ color }}>{delta > 0 ? `+${delta}` : `-${delta}`}</em> : '无变化'}
          </b>
        </div>
      </div>
      <strong style={{ color }}>{num}</strong>
      <span>{getTypeName(sub)}</span>
    </li>
  )
}

export default NumberItem
