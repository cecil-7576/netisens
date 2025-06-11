import React, {useState} from 'react'

function ColorPickerComponent() {

    const [color, setColor]=useState('#ffffff');
    const [rainbow, setRainbow]=useState('#0d0coc');
    const [colour, setColour]=useState('#ffffff');

    const kolor = (e)=>{
        setColour(e.target.value)
    }

    const rain = (e)=>{
        setRainbow(e.target.value)
    }


    function handleColor(e){
        setColor(e.target.value)
    }


  return (
    <div>
        <p style={{backgroundColor: colour}}>Select Your colour</p>
        <label htmlFor="">
            <input type="color" value={colour} onChange={kolor}/>
        </label>
        <div className='color-picker'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>  
        <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">set color</label>
        <input type="color" value={color} onChange={handleColor}/>
        </div>
        <div>
            <h2>Rainbow selector</h2>
            <div style={{backgroundColor: rainbow}}>
                <p>selected Rainbow</p>
            </div>
            <label htmlFor="">set Rainbow</label>
            <input type="color" value={rainbow} onChange={rain}/>
        </div>
    </div>
  )
}

export default ColorPickerComponent