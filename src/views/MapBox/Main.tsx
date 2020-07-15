import * as React from 'react'
// import * as globalStyle from '@/styles/index.module.css'
import classNames from 'classnames'
import image from '@/assets/imgs/question.png'
import * as localStyle from './styles/main.module.css'

function Main(): JSX.Element {
  return (
    <div className={classNames(localStyle.main)}>
      <div className={localStyle.statistics}>
        <div className={localStyle.title}>
          <span>截至北京时间 2020-07-15 07:33</span>
          <em>
            <img alt="question" src={image} />
            数据说明
          </em>
        </div>
        <div className={localStyle.bigNumber}>
          <p className={localStyle.compareTips}>较昨日变化数据：待国家卫健委数据公布中</p>
          <ul className={localStyle.count}>
            <NumberItem num={100} sub="现存确诊" />
            <NumberItem num={100} sub="境外输入" />
            <NumberItem num={100} sub="现存无症状" />
            <NumberItem num={100} sub="累计确诊" />
            <NumberItem num={100} sub="累计死亡" />
            <NumberItem num={100} sub="累计治愈" />
          </ul>
        </div>
      </div>
    </div>
  )
}

function getNumberItemColor(txt: string) {
  return {
    ['现存确诊']: 'rgb(247, 76, 49)',
    ['境外输入']: 'rgb(247, 130, 7)',
    ['现存无症状']: 'rgb(162, 90, 78)',
    ['累计确诊']: 'rgb(174, 33, 44)',
    ['累计死亡']: 'rgb(93, 112, 146)',
    ['累计治愈']: 'rgb(40, 183, 163)',
  }[txt]
}

function NumberItem(props: { num: number; sub: React.ReactNode }) {
  const { num, sub } = props
  const [color] = React.useState(getNumberItemColor)
  return (
    <li>
      <strong style={{ color }}>{num}</strong>
      <span>{sub}</span>
    </li>
  )
}
export default Main
