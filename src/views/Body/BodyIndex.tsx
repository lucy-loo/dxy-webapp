import * as React from 'react'
import { Link } from 'react-router-dom'

export function BodyIndex() {
  return (
    <ul>
      <li>
        <Link to="/map">map</Link>
      </li>
      <li>
        <Link to="/rumor">rumor</Link>
      </li>
      <li>
        <Link to="/alert">alert</Link>
      </li>
      <li>
        <Link to="/info">info</Link>
      </li>
    </ul>
  )
}
