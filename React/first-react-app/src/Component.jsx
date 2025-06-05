import React,{useState} from 'react'

function Component() {

    const [afam, setAfam]= useState('Guest')
    const[count, setCount]=useState(0);
    const [quantity, setQuantity]=useState();
    const[comment, setComment]= useState('');

    const feedBack = (e)=>{
      setComment(e.target.value)
    }

    const handleQuantityChange = (e)=>{
      setQuantity(e.target.value)
    }

    function increment (){
      setCount(count +1)
    }

    const decrement = ()=>{
      setCount(count -1)
    }

    const reset = ()=>{
      setCount(0)
    }
    function handleAfamChange (e){
        setAfam(e.target.value)
    }
  return (
    <div>
      <textarea name="" value={comment} width= '200' id="" onChange={feedBack} placeholder='Enter delivery instructions '></textarea>
      <p>Comment: {comment}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Number: {quantity}</p>
        <input type="text" name="" id="" value={afam} onChange={handleAfamChange}/>
        <p>Name: {afam}</p>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Component