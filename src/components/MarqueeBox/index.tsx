import React, { useMemo, useEffect } from 'react'
import localStyle from './style.local.css'
import WrapArray from '@/utils/array'

function MarqueeBox(props: { content: React.ReactNode[] }): JSX.Element {
  const { content } = props
  const cont = useMemo(() => WrapArray(content), [content])

  return (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className={localStyle.loopShowBox}>
          <ul className={localStyle.marqueeContent} style={{ top: 0, transitionDuration: '1s' }}>
            {cont.map((v) => (
              <li key={v.id} className={localStyle.liStyle}>
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
