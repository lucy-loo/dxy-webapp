import React from 'react'
import localStyle from './style.local.css'

function MarqueeBox(props: { content: React.ReactNode[] }): JSX.Element {
  const { content } = props
  return (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className={localStyle.loopShowBox}>
          <ul className={localStyle.marqueeContent} style={{ top: 0, transitionDuration: '1s' }}>
            {content.map((v, i) => (
              <li key={i} className={localStyle.liStyle}>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MarqueeBox
