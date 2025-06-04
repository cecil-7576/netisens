import React from 'react'
import Picture from './assets/chuck.jpeg'

function ProfilePicture() {

    const toggle = (e)=>{
        e.target.style.display = 'none'
    }

  return (
    <img onClick={(e)=>toggle(e)}src={Picture} alt="" />
  );
}

export default ProfilePicture