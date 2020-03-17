import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Banner } from './views/Banner/Banner'
import { Body } from './views/Body'
import { Footer } from './views/Footer'
import { Router, Switch, Route } from 'react-router'
import { Link, BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'))

function App() {
  return (
    <HashRouter>
      <Banner />
      <Body />
      <Footer />
    </HashRouter>
  )
}
