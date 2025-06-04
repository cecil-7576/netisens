import React, {useState} from 'react'

// import { useState } from "react";
// import React from 'react'


function MyComponent() {
    
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isLogged, setIsLogged] = useState(false);

    const updateName = ()=> {
        setName('Virgil');
    }

    const incrementAge = ()=>{
        setAge(age + 1);
    }

    const toggle = ()=>{
        setIsLogged(!isLogged)
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={()=>updateName()}>Set Name</button>


        
            <p>Age: {age}year/s old</p>
            <button onClick={incrementAge}>Increment Age</button>

             <p>isLogged: {isLogged ? 'Yes' : 'No'}</p>
            <button onClick={toggle}>Toggle Statues</button>
        </div>


        
    );
}

export default MyComponent 
