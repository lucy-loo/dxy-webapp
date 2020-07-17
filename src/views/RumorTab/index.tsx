import * as React from 'react'
import * as globalStyle from '@/styles/index.module.css'
import WhiteSpace from '@/components/WhiteSpace'
import MapTap from '../MapBox/MapTap'

function RumorTab(): JSX.Element {
  return (
    <div className={globalStyle.rumerTabWrap}>
      <WhiteSpace />
      <MapTap>辟谣与防护</MapTap>
    </div>
  )
}

export default RumorTab
