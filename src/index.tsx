import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import classNames from 'classnames'
import * as globalStyle from '@/styles/index.module.css'
import Top from './views/Top'
import Tab from './views/Tab'
import MapBox from './views/MapBox'
import RumorTab from './views/RumorTab'
import RecomendList from './views/RecomendList'
import WikiTab from './views/WikiTab'
import BottomLogo from './views/BottomLogo'
import RealTimeAlert from './views/RealTimeAlert'
import WakeupAspirinApp from './views/WakeupAspirinApp'

enum TabIndexEnum {
  MAP,
  ALERT,
  RUMOR,
  WIKI,
}
ReactDOM.render(<App />, document.getElementById('root'))

function App() {
  React.useEffect(() => {
    document.title = 'copy-全球新冠病毒最新实时疫情地图_丁香园'
  }, [])
  const [clientHeight, setClientHeight] = React.useState<number>(null)
  React.useEffect(() => {
    // didMount
    document.documentElement.clientHeight && setClientHeight(document.documentElement.clientHeight)
  }, [])
  return (
    <div className={classNames(globalStyle.wrapper)} style={{ maxHeight: clientHeight }}>
      <HashRouter>
        <Top />
        <Tab<TabIndexEnum>
          content={[
            {
              index: TabIndexEnum.MAP,
              tabHead: '疫情地图',
              tabContent: <MapBox />,
            },
            {
              index: TabIndexEnum.ALERT,
              tabHead: '实时播报',
              tabContent: <RealTimeAlert />,
            },
            {
              index: TabIndexEnum.RUMOR,
              tabHead: '辟谣与防护',
              tabContent: (
                <>
                  <RumorTab />
                  <RecomendList />
                </>
              ),
            },
            {
              index: TabIndexEnum.WIKI,
              tabHead: '疾病知识',
              tabContent: <WikiTab />,
            },
          ]}
        />
        <BottomLogo />
        <WakeupAspirinApp />
      </HashRouter>
    </div>
  )
}
