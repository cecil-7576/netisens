import React from 'react'
// import ProfilePicture from './ProfilePicture'
// import masi from './assets/masi.jpeg'

function Button() {

    const handleClick = (e)=> e.target.textContent = 'Ouch!'
    // let count = 0;
    // const handleClick= (name)=> {
    //     if(count <3){
    //         count++
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     } else {
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };
    // const handleClick2 = (name)=> console.log(`${name} stop clicking me`) 
  return (
    <div>
        <button onDoubleClick= {(e)=> handleClick(e)}>Click Me</button>
    </div>
  )
}

export default Button