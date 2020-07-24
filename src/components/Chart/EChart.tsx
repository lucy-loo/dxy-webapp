import React, { useEffect } from 'react'
import EChart from 'echarts'

interface MyChartProps {
  options: echarts.EChartOption
  height: number
  width?: number
}

MyEChart.defaultProps = {
  width: document.body.clientWidth,
}

function MyEChart(props: MyChartProps): JSX.Element {
  const { options, height, width } = props
  const [chart, setChart] = React.useState<echarts.ECharts>()
  const eleRef = React.useRef()
  useEffect(() => {
    eleRef?.current && setChart(EChart.init(eleRef.current))
  }, [eleRef])
  useEffect(() => {
    chart && chart.setOption(options)
  }, [chart, options])
  return <div ref={eleRef} style={{ width: width || document.body.clientWidth, height }} />
}

export default MyEChart
