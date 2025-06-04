import React,{useState} from 'react'

function Component() {

    const [afam, setAfam]= useState('Guest')

    function handleAfamChange (e){
        setAfam(e.target.value)
    }
  return (
    <div>
        <input type="text" name="" id="" value={afam} onChange={handleAfamChange}/>
        <p>Name: {afam}</p>
    </div>
  )
}

export default Component