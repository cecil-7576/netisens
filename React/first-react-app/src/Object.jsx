import React, { useState } from 'react'



function Object() {

    const [car, setCar]=useState({year:2025, make:'Mecedes-Benz', model:'GLK', color: 'white'})

    function handleYearChange(e){
      setCar(c=>({...c, year: e.target.value}))
    }

    function handleMakeChange(e){
      setCar(c =>({...c, make: e.target.value}))
    }

    function handleModelChange(e){
      setCar(c=>({...c, model: e.target.value}))
    }

    function handleColorChange(e){
      setCar(c=>({...c, color: e.target.value}))
    }

  return (
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}. {car.color}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
        <input type="text" value={car.color} onChange={handleColorChange}/><br />
    </div>
  )
}

export default Object