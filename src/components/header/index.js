import React from 'react'
import './style.css'
import {
  NavLink
} from "react-router-dom";
// eslint-disable-next-line
export default ({ title, ...rest}) => {
  return(
    <header {...rest}>
      <>{title}</>
      <section>
         <ul>
          <li>
            <NavLink exact activeClassName="activado" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{fontSize: 20}} exact to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink exact to="/portafolio">Portafolio</NavLink>
          </li>
           <li>
             <select id="loggedIn" name="loggedIn">
               <option >In</option>
               <option >Out</option>
             </select>
           </li>
        </ul>
      </section>
    </header>
  )
}
