import React from 'react'



function Items(props) {
    
    const category = props.category 
    const listOfCars = props.ride
    // vehicles.sort((a, b)=> a.name.localeCompare(b.name)) 
    // vehicles.sort((a, b)=> a.horsePower-b.horsePower) 
    // const select = vehicles.filter((mob)=>mob.horsePower > 400)   
             
    
    const car = listOfCars.map((mobs)=> <li key={mobs.id}>
                                     {mobs.name}--- &nbsp;
                                     <b><em>{mobs.horsePower}</em></b></li>) 


    return(<div>
        <h3>{category}</h3>
        <ol>{car}</ol>
        </div>)
}

Items.defaultProps = {
   category: 'category',
   mobs: []
}

export default Items