import React from 'react'
import adsStyle from './styles/ads.module.css'

function Ads() {
  return (
    <div className={adsStyle.coll}>
      <div className={adsStyle.collItem}>
        <AdsItem
          imgUrl="https://img1.dxycdn.com/2020/0303/715/3399947621103181405-135.png"
          title="疫情报告"
          subtitle="每周五晚发布"
        />
      </div>
      <div className={adsStyle.collItem} style={{ gridColumn: '2/4' }}>
        <AdsItem
          imgUrl="https://img1.dxycdn.com/2020/0221/550/3397927717311267685-135.png"
          title="健康好物 挑选指南"
          subtitle="防疫、失眠…你的困扰这里都有答案"
        />
      </div>
      <div className={adsStyle.collItem}>
        <AdsItem
          imgUrl="https://img1.dxycdn.com/2020/0221/861/3397927687246311086-135.png"
          title="母婴健康"
          subtitle="在家孕育指南"
        />
      </div>
      <div className={adsStyle.collItem}>
        <AdsItem
          imgUrl="https://img1.dxycdn.com/2020/0221/578/3397927811800552709-135.png"
          title="线上开药"
          subtitle="快递送货上门"
        />
      </div>
      <div className={adsStyle.collItem}>
        <AdsItem
          imgUrl="https://img1.dxycdn.com/2020/0221/518/3397927841865325260-135.png"
          title="在线问诊"
          subtitle="三甲医生义诊"
        />
      </div>
    </div>
  )
}

export default Ads

function AdsItem(props: { imgUrl: string; title: string; subtitle: string }) {
  const { imgUrl, title, subtitle } = props
  return (
    <>
      <img className={adsStyle.icon} alt="" src={imgUrl} />
      <div className={adsStyle.texts}>
        <p className={adsStyle.title}>
          <span>{title}</span>
        </p>
        <p className={adsStyle.subTitle}>
          <span>{subtitle}</span>
        </p>
      </div>
    </>
  )
}
