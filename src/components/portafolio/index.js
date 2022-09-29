import { Link, Switch, Route } from 'react-router-dom'
import React from 'react';

export default function(){
  return(
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto-1'}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={'/portafolio/proyecto-2'}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={'/portafolio/proyecto-1/'}>
            <h2>Proyecto-1</h2>
          </Route>
          <Route path={'/portafolio/proyecto-2/'}>
            <h2>Proyecto-2</h2>
          </Route>
        </Switch>
      </div>
    </>
  )
}
