import React from 'react'

function SignPage() {

    const create = {
    color: 'rgb(152, 152, 150)'
    }
  return (
    <div className='main'>
        <div className='section'>
            <form action="">
            <h2>Welcome!!</h2>
            <p>Enter your credentials to create an account</p>
            <div className='inputbox'>
                <label htmlFor="">Keke ID</label>
                <input type="text" />
            </div>
            <br />
            <div className='inputbox'>
                <label htmlFor="" style={create}>Create Password</label>
                <input type="text" />
            </div>
            <div>
                <p className='signup'>
                    Your password must be at least 8 characters long, not too similar to <br />your personal information, not a commonly used password, and not <br />entirely numeric
                </p>
            </div>
            <div className='inputbox'>
                <label htmlFor="">Re-enter Password</label>
                <input type="text" />
            </div>
            <br />
            <button className='button'>Next</button>
        </form>
        </div>
    </div>
  )
}

export default SignPage