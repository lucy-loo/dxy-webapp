import React from 'react'
import image from '@/assets/imgs/right-arrow.png'
import localStyle from './styles/top.module.css'

function MapBoxTop(): JSX.Element {
  return (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className={localStyle.loopShowBox} id="marquee-loop-show-box">
          <ul className={localStyle.marqueeContent} id="marquee-con1" style={{ top: 0, transitionDuration: '1s' }}>
            <li className={localStyle.liStyle}>
              <div className={localStyle.leftText}>数字新冠</div>
              <div className={localStyle.message}>7 月 9 日，世界因新冠而变</div>
              <div className={localStyle.rightIcon}>
                <img alt="" src={image} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MapBoxTop
