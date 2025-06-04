import React from 'react'


const boycss = {
    fontSize: "2.5em",
    backgroundColor: "skyblue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    width: "50%",  
}; 

const girlcss = {
    fontSize: "2.5em",
    backgroundColor: "pink",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    width: "50%"
}; 
function BoyorGirl(props) {

    const boy = <p style={boycss}>Welcome baby boy {props.boy}</p>

    const girl = <p style={girlcss}>Welcome baby girl {props.girl}</p>

     return(props.isBoy? boy : girl)
}

export default BoyorGirl