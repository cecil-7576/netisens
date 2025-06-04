import React from 'react'

function Button() {

   const handleClick = (e)=> e.target.innerHTML = "Yup watsUp"
  return (
    <div>
        <button onClick={(e)=>handleClick(e)}>Click Me</button>
    </div>
  )
}

export default Button