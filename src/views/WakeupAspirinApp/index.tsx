import * as React from 'react'
import * as globalStyle from '@/styles/index.module.css'

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
  return <div className={globalStyle.wakeupAspirinApp} onClick={onClick} />
}

export default WakeupAspirinApp
