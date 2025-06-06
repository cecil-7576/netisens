import React,{useState} from 'react'

function Component() {

    const [afam, setAfam]= useState('Guest')
    const[count, setCount]=useState(0);
    const [quantity, setQuantity]=useState();
    const[comment, setComment]= useState('');
    const[area, setArea]= useState('');
    const [select, setSelect]= useState('');
    const [radio, setRadio] = useState('');

    function tv (e){
      setRadio(e.target.value)
    }

    function option (e){
      setSelect(e.target.value)
    }

    const textArea = (e)=>{
      setArea(e.target.value)
    }

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
        <label htmlFor="">Pick Up</label>
        <select name="" id="" value={select} onChange={option}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="master card">Mastercard</option>
        <option value="Vive">Vive</option>
        <option value="Opay">Opay</option>
        </select>
      <p>Payment: {select}</p>
      <input name="" type="number" value={area} onChange={textArea}></input>
      <p>Idea: {area}</p>
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