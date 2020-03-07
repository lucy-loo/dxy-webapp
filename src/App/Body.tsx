import * as React from 'react'
import { Router, Route, Link } from 'react-router'

export function Body() {
  return (
    <div>
      Body
      <br />
      <Router>
        <Route />
        <Route />
        <Route />
      </Router>
    </div>
  )
}
