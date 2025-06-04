import React from 'react'

function LogIn() {

    const create = {
    color: 'rgb(152, 152, 150)'
    }
  return (
    <div className='main'>
        <div className='section'>
            <form action="" className='form'>
            <h2>Welcome Back</h2>
            <p>Enter your credentials to create an account</p>
            <div className='inputboxx'>
                <label htmlFor="">Keke ID</label>
                <input type="text" />
            </div>
            <br />
            <div className='inputboxx'>
                <label htmlFor="" style={create}>Password</label>
                <input type="text" />
            </div>
            <br />
            <button className='button2'>Next</button>
        </form>
        </div>
    </div>
  )
}

export default LogIn