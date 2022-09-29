import React from 'react'
import './style.css'
import {
  Link
} from "react-router-dom";

export default ({ title, ...rest}) => {
  return(
    <header {...rest}>
      <>{title}</>
      <section>
         <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>


      </section>
    </header>
  )
}
