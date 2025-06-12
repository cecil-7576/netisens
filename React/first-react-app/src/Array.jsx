import React, { useState} from 'react'
import List from './List';

function Array() {

    

    const[foods, setFoods]=useState(['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple']);
    
    const[car, setCar]=useState({year:2025, make:'Mecedes-Benz', model: 'GLK', color: 'white'});

    const[meal, setMeal]=useState(['Rice', 'Beans', 'Yam', 'Fufu', 'Melon soup'])

    function addMeal(){
      const newMeal = document.getElementById('list-meals').value;

      document.getElementById('list-meals').value = "";

      setMeal([...meal,newMeal])
    }

    function removeMeal(index){
      setMeal(meal.filter((_,i)=>i !==index))
    }

    function handleYearChange(e){
      setCar({...car,year:e.target.value})
    }

    function handleMakeChange(e){
      setCar({...car,make:e.target.value})
    }

    function handleModelChange(e){
      setCar({...car,model:e.target.value})
    }

    function handleColorChange(e){
      setCar({...car,color:e.target.value})
    }


    function handleAddFood(){
        const newFood = document.getElementById('foodinput').value;

        document.getElementById('foodinput').value = "";

        setFoods(f=> [...f,newFood])
        
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i)=> i !== index))
    }


  return (
    <div>
        <h3>List of meals</h3>
        <ul>
          {meal.map((chow, index)=> <li key={index} onClick={()=> removeMeal(index)}>{chow}</li>)}
        </ul>
        <input type="text" id='list-meals' placeholder='enter your meal'/>
        <button onClick={addMeal}>Add Meal</button>
        <p>Your favorite Car is: {car.year}, {car.make} {car.model} {car.color}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
        <input type="text" value={car.color} onChange={handleColorChange}/>

        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodinput' placeholder='Enter food name'/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default Array