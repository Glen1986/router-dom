import { NavLink, useRouteMatch } from 'react-router-dom'
import { Proyectos } from '../../components'
import React from 'react';
// eslint-disable-next-line
export default ()=>{

  const match = useRouteMatch()
  const myUrl = match.url

  return(
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink  isActive={(match, location)=>{console.log(match,location)}}exact to={`${myUrl}/proyecto-1`}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink exact to={`${myUrl}/proyecto-2`}>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <Proyectos {...myUrl}/>
     </div>
    </>
  )
}
