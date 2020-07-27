import React, { PropsWithChildren } from 'react'
import localStyle from './styles/maptap.module.css'

function MapTap(props: PropsWithChildren<unknown>) {
  const { children } = props
  return (
    <p className={localStyle.mapTap}>
      <i />
      {children}
    </p>
  )
}

export default MapTap
