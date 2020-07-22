import React from 'react'
import image from '@/assets/imgs/right-arrow.png'
import localStyle from './styles/top.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

interface MarqueeProps {
  contents: { title: string; msg: string; src: string }[]
  delay_ms?: number
  duration_ms?: number
}

let timer = 0

function toHref(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
  window.document.location.href = event.currentTarget.dataset['src']
}

function setInterval(size: number, clb: () => void, delay_ms: number) {
  let count = 0
  callback(delay_ms)
  function callback(delay: number) {
    // clearInterval(timer)
    clb()
    count = (count + 1) % size
    timer = window.setTimeout(() => callback(count == 0 ? 0 : delay), delay)
    console.log(timer, delay, size, count)
  }
}

function clearInterval() {
  window.clearTimeout(timer)
  // window.clearInterval(timerId)
}

function Marquee(props: MarqueeProps): JSX.Element {
  const { contents: _contents, delay_ms, duration_ms: _duration_ms } = props
  const [duration_ms, setDuration_ms] = useState(_duration_ms)
  const [contents] = useState(_contents.concat([_contents[0]]))
  const [animationArr, setAnimationArr] = useState([0])
  const [index, setIndex] = useState(0)
  const contentRef = useRef()
  useEffect(() => {
    const arr = new Array(contents.length)
    arr.fill(0)
    arr.forEach((v, i) => {
      arr[i] = 20 * i
    })
    setAnimationArr(arr)
    setIndex(0)
  }, [_contents])

  useEffect(() => {
    if (!contentRef.current) return
    !timer &&
      setInterval(
        contents.length,
        () => {
          setIndex((i) => {
            return (i + 1) % contents.length
          })
          setDuration_ms((_duration_ms) => (index ? _duration_ms : 0))
        },
        delay_ms
      )
    return () => {
      clearInterval()
    }
  }, [delay_ms, contents, contentRef])
  // useEffect(() => {
  //   !timer &&
  //     setInterval(
  //       contents.length,
  //       () => {
  //         setIndex((i) => {
  //           return (i + 1) % contents.length
  //         })
  //         setDuration_ms(index ? _duration_ms : 0)
  //       },
  //       delay_ms
  //     )
  //   return () => {
  //     clearInterval()
  //   }
  // }, [])
  // useEffect(() => {
  //   setDuration_ms(index ? _duration_ms : 0)
  // }, [index, _duration_ms])

  return !contents || !contents.length ? null : (
    <div className={localStyle.root}>
      <div className={localStyle.wrapper}>
        <div className={localStyle.loopShowBox} id="marquee-loop-show-box">
          <ul
            ref={contentRef}
            className={localStyle.marqueeContent}
            id="marquee-con1"
            style={{
              top: `-${animationArr[index]}px`,
              transitionDuration: `${duration_ms}ms`,
            }}
          >
            {contents.map((con) => (
              <li className={localStyle.liStyle} data-src={con.src} onClick={toHref}>
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
  delay_ms: 3000,
  duration_ms: 1000,
}
export default Marquee
