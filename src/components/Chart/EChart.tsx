import * as React from 'react'
import * as EChart from 'echarts'

interface MyChartProps {
  opt: echarts.EChartOption
}

export function MyEChart(props: MyChartProps) {
  const [ech, setEch] = React.useState<echarts.ECharts>()
  const eleRef = React.useRef()
  React.useEffect(() => {
    eleRef?.current && setEch(EChart.init(eleRef.current))
  }, [eleRef])
  return <div ref={eleRef}></div>
}
