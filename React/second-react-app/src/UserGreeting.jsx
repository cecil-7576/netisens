import React from 'react'


const wel = {
    fontSize: "2.5em",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    
}; 

const login = {
    fontSize: "2.5em",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
}



function UserGreeting(props) {

    const cecilia = props.username

    const welcome = <h2 style={wel}> Welcome {cecilia}, </h2>;

    const loggin = <h2 style={login}>Please log in to continue {cecilia}</h2>

    return(props.age === 5? welcome : loggin );
}

export default UserGreeting