import React, { PropsWithChildren } from 'react'
import localStyle from './styles/statist.module.css'
import numberPannelStyle from './styles/numberpannel.module.css'
import NumberItem, { NumItemType } from './NumberPannelItem'
import MapHeader from './MapHeader'

export enum StatistType {
  China,
  Global,
}
interface StatistProps extends PropsWithChildren<any> {
  type: StatistType
  data: { val: number; delta: number; type: NumItemType }[]
}
function Statist(props: StatistProps) {
  const { type, data } = props
  return (
    <div className={localStyle.main}>
      <div className={localStyle.statistics}>
        <MapHeader />
        <div className={numberPannelStyle.bigNumber}>
          <p className={numberPannelStyle.compareTips}>较昨日变化数据：待国家卫健委数据公布中</p>
          <ul className={numberPannelStyle.count} data-partion={type === StatistType.China ? '3' : '4'}>
            {data.map((d) => (
              <NumberItem num={d.val} sub={d.type} delta={d.delta} />
            ))}
            {/* <NumberItem num={100} sub={NumItemType.INPUT} delta={9} />
            <NumberItem num={100} sub={NumItemType.NoSumtu} delta={0} />
            <NumberItem num={100} sub={NumItemType.AccCurr} delta={143} />
            <NumberItem num={100} sub={NumItemType.AccDead} delta={0} />
            <NumberItem num={100} sub={NumItemType.AccCure} delta={45} /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Statist
