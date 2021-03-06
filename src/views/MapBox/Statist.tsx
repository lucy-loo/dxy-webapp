import React, { PropsWithChildren } from 'react'
import localStyle from './styles/statist.module.css'
import numberPannelStyle from './styles/numberpannel.module.css'
import NumberItem, { NumItemType } from './NumberPannelItem'
import MapHeader from './MapHeader'

export enum StatistType {
  China,
  Global,
}
interface StatistProps extends PropsWithChildren<unknown> {
  type: StatistType
  data: { id: string; val: number; delta: number; type: NumItemType }[]
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
              <NumberItem key={d.id} num={d.val} sub={d.type} delta={d.delta} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Statist
