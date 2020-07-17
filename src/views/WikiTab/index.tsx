import React from 'react'
import WhiteSpace from '@/components/WhiteSpace'
import localStyle from './styles/index.module.css'
import MapTap from '../MapBox/MapTap'

function WikiTab(): JSX.Element {
  return (
    <div className={localStyle.wikiWrapper}>
      <WhiteSpace />
      <MapTap>疾病知识</MapTap>
    </div>
  )
}

export default WikiTab
