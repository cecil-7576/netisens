import React from 'react'
// import style from './Child.module.css'

function Child() {

    const child = {
        fontSize:'50px',
        fontFamily: 'monospace',
        color:'green'
    } 
  return (
    <div style={child}>Child</div>
  )
}

export default Child