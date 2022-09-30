import { Link, useRouteMatch } from 'react-router-dom'
import { Proyectos } from '../../components'
import React from 'react';

export default ()=>{
  const match = useRouteMatch()
  const myUrl = match.url
//
  return(
    <>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={`${myUrl}/proyecto-1`}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={`${myUrl}/proyecto-2`}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Proyectos {...myUrl}/>
     </div>
    </>
  )
}
