import React from 'react'

export default ({title, ...rest})=>{
  return(
    <section {...rest}>{title}</section>
  )
}
