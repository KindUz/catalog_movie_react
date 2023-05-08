import React from 'react'
import cl from "./Input.module.css"

const Input = (props) => {
  return (
    <div>
        <input className={cl.myInput} value={props.value}  {...props}/>
    </div>
  )
}

export default Input