import React, { useState } from 'react'
import image from '@/assets/imgs/question.png'
import localStyle from './styles/mapheader.module.css'
import DataDesc from './DataDesc'

function MapHeader() {
  const [isShowModal, setIsShowModal] = useState(false)
  return (
    <>
      <div className={localStyle.title}>
        <span>截至北京时间 2020-07-15 07:33</span>
        <em onClick={() => setIsShowModal(true)}>
          <img alt="question" src={image} />
          数据说明
        </em>
      </div>
      <DataDesc onClose={() => setIsShowModal(false)} isShowModal={isShowModal} />
    </>
  )
}

export default MapHeader
