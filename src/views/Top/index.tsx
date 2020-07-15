import * as React from 'react'
import * as globalStyle from '@/styles/index.module.css'
import classnames from 'classnames'
// import * as localStyle from './top.local.css'
import image from '@/assets/imgs/switch.png'

function Top(): JSX.Element {
  return (
    <div className={classnames(globalStyle.top)}>
      <Pv />
      <SwitchLanguage />
    </div>
  )
}

export default Top

function Pv() {
  const [pv, setPv] = React.useState(0)
  React.useEffect(() => {
    setPv(12345678)
  }, [])
  return <div className={globalStyle.pv}>{pv}人次已浏览</div>
}

function SwitchLanguage() {
  return (
    <a
      className={globalStyle.changeBtn}
      href="https://ncov.dxy.cn/ncovh5/view/en_pneumonia?from=dxy&amp;source=&amp;link=&amp;share="
    >
      <img alt="icon" className={globalStyle.icon} src={image} />
      <span className={globalStyle.content}>Switch to English Version</span>
    </a>
  )
}
