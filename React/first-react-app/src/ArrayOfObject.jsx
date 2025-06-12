import React, {useState} from 'react'

function ArrayOfObject() {

    const[cars, setCars]=useState([]);
    const[carYear,setCarYear]=useState(new Date().getFullYear());
    const[carMake, setCarMake]=useState('');
    const[carModel, setCarModel]=useState('');

    function handleAddCar(){

    }

    function handleRemoveCar(index){

    }

    function handleYearChange(e){

    }

    function handleMakeChange(e){

    }

    function handleModelChange(e){

    }


  return (
    <div>
        <h2>List of Car Object</h2>
        <ul>

        </ul>

        <input type="number" value={carYear}/>
    </div>
  )
}

export default ArrayOfObject