
import React, {useState} from 'react'


const CallToAction = {
    margin: '5px',
    width: '100px',
    padding: '10px',
    backgroundColor: 'aqua',
    borderRadius: '5px',
    border: 'none',
    fontStyle: 'italic',
    fontFamily: 'monospace',
    fontSize: '13px',
}
function UserGreeting() {
 const [name, setName] = useState();
 
 function formation(e){
    e.preventDefault();
    // console.dir(e.target.children[0].value)
    if(e.target.children[0].value){
    setName(e.target.children[0].value)
    }
 }

 return (
    <div>Showing current name: {name}
    <br />
    <br />
    <button style={CallToAction} onClick={()=>setName('Cecil')}>Change name</button>&nbsp;&nbsp;&nbsp;
    <button style={CallToAction} onClick={()=>setName('Ebube')}>Return</button>
    <div>
        <br />
        <form action="" onSubmit={formation}>
            <input type="text" placeholder="enter name" name="username"/> <br />
            <br />
            <button className='btc'>Reset</button>
        </form>
        
    </div>
    </div>
    
    
 )
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
}

export default UserGreeting