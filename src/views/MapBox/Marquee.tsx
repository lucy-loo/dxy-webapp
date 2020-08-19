import React, { useMemo } from 'react'
import image from '@/assets/imgs/right-arrow.png'
import localStyle from './styles/top.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import WrapArray from '@/utils/array'

interface MarqueeProps {
  contents: { title: string; msg: string; src: string }[]
  interval_ms?: number
  animation_duration_ms?: number
}

let timer = 0

function toHref(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
  window.document.location.href = event.currentTarget.dataset['src']
}

function setInterval(
  clb: () => void,
  intervalTime_ms: number,
  boundary: number = Number.MAX_SAFE_INTEGER,
  boundaryCleanup?: () => void,
  clearupGap_ms?: number
) {
  callback()
  let count = 0
  function callback() {
    clb()
    if (count == 0) {
      boundaryCleanup && boundaryCleanup()
      timer = window.setTimeout(callback, clearupGap_ms || 300)
    } else {
      timer = window.setTimeout(callback, intervalTime_ms)
    }
    count = (count + 1) % boundary
  }
}

function clearInterval() {
  window.clearTimeout(timer)
}

function Marquee(props: MarqueeProps): JSX.Element {
  const { contents: _contents, interval_ms, animation_duration_ms } = props
  const [duration_ms, setDuration_ms] = useState(animation_duration_ms)
  const [contents] = useState(_contents.concat([_contents[0]]))
  const [index, setIndex] = useState(1)
  const contentRef = useRef()
  useEffect(() => {
    if (!contentRef.current || timer) return
    setInterval(
      () => {
        setIndex((i) => {
          const newInd = (i + 1) % contents.length
          return newInd
        })
        setDuration_ms(animation_duration_ms)
      },
      interval_ms,
      contents.length,
      () => {
        setIndex(0)
        setDuration_ms(0)
      },
      animation_duration_ms
    )
    return () => {
      clearInterval()
    }
  }, [interval_ms, contents, contentRef])
  const cont = useMemo(() => WrapArray(contents), [contents])
  return !contents || !contents.length ? null : (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className={localStyle.loopShowBox} id="marquee-loop-show-box">
          <ul
            ref={contentRef}
            className={localStyle.marqueeContent}
            id="marquee-con1"
            style={{
              top: `-${index * 20}px`,
              transitionDuration: `${duration_ms}ms`,
            }}
          >
            {cont.map((con) => (
              <li key={con.id} className={localStyle.liStyle} data-src={con.src} onClick={toHref}>
                <div className={localStyle.leftText}>{con.title}</div>
                <div className={localStyle.message}>{con.msg}</div>
                <div className={localStyle.rightIcon}>
                  <img alt="" src={image} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
Marquee.defaultProps = {
  interval_ms: 1000,
  animation_duration_ms: 300,
}
export default Marquee
