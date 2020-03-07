import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Banner } from './App/Banner'
import { Body } from './App/Body'
import { Footer } from './App/Footer'

ReactDOM.render(<App />, document.getElementById('root'))

function App() {
  return (
    <div>
      123
      <Banner />
      <Body />
      <Footer />
    </div>
  )
}
