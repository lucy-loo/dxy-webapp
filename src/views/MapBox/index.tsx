import * as React from 'react'
// import * as globalStyle from '@/styles/index.module.css'
import classNames from 'classnames'
import * as localStyle from './styles/index.module.css'
import Main from './Main'

// 疫情地图
function MapBox(): JSX.Element {
  return (
    <div className={localStyle.mapBox}>
      <Root />
      <Tabs />
      <Main />
    </div>
  )
}

export default MapBox

function Root(): JSX.Element {
  return <div className={localStyle.root} />
}

function Tabs(): JSX.Element {
  return (
    <div className={localStyle.tab}>
      <TabItem>国内疫情数据</TabItem>
      <TabItem>全球疫情数据</TabItem>
    </div>
  )
}

function TabItem(props: { children: React.ReactNode; isActive: boolean }): JSX.Element {
  const { children, isActive } = props
  return <div className={classNames(localStyle.item, { [localStyle.current]: isActive })}>{children}</div>
}


function Coll(): JSX.Element {
  return <div className={localStyle.coll} />
}

function MapTap(): JSX.Element {
  return <div className={localStyle.mapTap} />
}

function Header(): JSX.Element {
  return <div className={localStyle.header} />
}

function Swiper(): JSX.Element {
  return <div className={localStyle.swiperContainer} />
}

function ItemWrap(): JSX.Element {
  return <div className={localStyle.ItemWrap} />
}
