import * as React from 'react'
import { Button } from '../../components/Button/Button'
import './style'
export function Footer() {
  return (
    <div className="footer">
      <Button>订阅疫情动态</Button>
      <Button>分享疫情地图</Button>
    </div>
  )
}
