import * as React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { BodyIndex } from './BodyIndex'
import { Map } from './Map'
import { Rumor } from './Rumor'
import { Alert } from './Alert'
import { Infos } from './Infos'
import './style'

export function Body() {
  return (
    <React.Fragment>
      <BodyIndex />
      <Switch>
        <Route path="/map" exact={true}>
          <Map />
        </Route>
        <Route path="/rumor" exact={true}>
          <Rumor />
        </Route>
        <Route path="/alert" exact={true}>
          <Alert />
        </Route>
        <Route path="/info" exact={true}>
          <Infos />
        </Route>
        <Route>
          <Redirect to="/map" />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
