import React from 'react'
import localStyle from './index.module.css'
import img from './wake.png'

function WakeupAspirinApp(): JSX.Element {
  function onClick() {
    // var A =
    //     "https://ask.dxy.com/index#/activity-share?activity_id=136&dxa_cn=y1qingditu",
    //   B = encodeURIComponent(A);
    // Object(F["g"])()
    // --IOS
    //   ? (window.location.href = "https://app.dxy.cn/aspirin/index?redirectTo=".concat(
    //       B
    //     ))
    //   : F["n"]
    // --
    //   ? (window.location.href =
    //       "https://a.app.qq.com/o/simple.jsp?pkgname=cn.dxy.android.aspirin")
    //   : ((window.location.href = "dxy-aspirin://"),
    //     setTimeout(function () {
    //       window.location.href = A;
    //     }, 500));
  }
  // eslint-disable-next-line
  return (
    <div className={localStyle.wakeup} onClick={onClick}>
      <div className={localStyle.inner}>
        <img src={img} alt="打开丁香医生" className={localStyle.icon} />
        <span className={localStyle.text}>打开丁香医生 App 查看更多数据</span>
      </div>
    </div>
  )
}

export default WakeupAspirinApp
