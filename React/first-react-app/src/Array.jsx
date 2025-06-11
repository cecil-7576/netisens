import React, { useState} from 'react'
import List from './List';

function Array() {

    

    const[foods, setFoods]=useState(['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple']);
    
    const[meal, setMeal]=useState(['Jellof Rice', 'Pourage Yam', 'Melon Soup fufu'])


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
        <h4>List of Meals</h4>
        <ul>
          {meal.map((meals, index)=> <li key={index}>{meals}</li>)}
        </ul>
        <input type="text" id='mealinputs' />
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