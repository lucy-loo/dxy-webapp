import * as React from 'react'
// import * as globalStyle from '@/styles/index.module.css'
import * as localStyle from './mapbox.local.css'

function MapBoxTop(): JSX.Element {
  return (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className="loop-show-box___2Fl4m" id="marquee-loop-show-box">
          <ul className="marquee-content___2-t2r" id="marquee-con1" style={{ top: 0, transitionDuration: '1s' }}>
            <li className={localStyle.liStyle}>
              <div className={localStyle.leftText}>数字新冠</div>
              <div className={localStyle.message}>7 月 9 日，世界因新冠而变</div>
              <div className={localStyle.rightIcon}>
                <img alt="" src={require('@/assets/imgs/right-arrow.png').default} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MapBoxTop
