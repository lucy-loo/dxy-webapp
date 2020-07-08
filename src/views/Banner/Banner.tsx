import * as React from 'react'
import * as style from './style.scss'
import classnames from 'classnames'

export function Banner() {
  return <div className={classnames(style.banner, style.wrapper)}>Banner</div>
}
