import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import React from 'react'

const Proyecto =()=>{
  const params = useParams()
  const proyecto_id = params.proyecto_id
   return(
  <h2>proyecto...{proyecto_id} </h2>
  )
}

export default () =>{
  let match = useRouteMatch()  
  match = match.path
  match = match.split("/")
  const link = match[1]

  return(
    <>
        <Switch>
          <Route path={`/${link}/:proyecto_id`}>
            <Proyecto/>
          </Route>
        </Switch>
 
    </>
  )
}
