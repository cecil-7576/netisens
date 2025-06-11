import React, {useState} from 'react'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [count, setCount]=useState(0)

  function handleIncrement (){
    setCount(count=>count + 1)
  }

  function handleDecrement (){
    setCount(count - 1)
  }

  function handleReset (){
    setCount(0)
  }

  return (
    <div>

      <LandingPage/>

      <h1 className='text-[red]'>App showing Count btn</h1>
      <p>This is count: {count}</p>
      <button onClick={handleIncrement}>Increment Btn</button>
      <button onClick={handleReset}>Reset Btn</button>
      <button className='bg-cyan-500 rounded-md border-2 border-[orange] m-2 p-[2px]' onClick={handleDecrement}>Decrement Btn</button>
    </div>
  )
}

export default App