import React from 'react'
import "./Profile.css"

function Profile() {

    const id = localStorage.getItem("userID");
    const name = localStorage.getItem("firstName");
    const email = localStorage.getItem("userEmail");
    const avatar = localStorage.getItem("avatar");

  return (
    <div className='profile'>
      <div className='profile_div'>
         <h3 className='profile_h3'>User Profile</h3>

         <div className='psec'>
            <div className='psec_img_div'>
                <img src={avatar} alt="" className='psec_img'/>
                <button className='psec_btn'>Update profile</button>
            </div>
           <div className='psec_div'>
             <label className='profile_label' >User ID :      <input type="text"  className='psec_input' value={id} readonly/></label>
             <label className='profile_label' >Name :         <input type="text"  className='psec_input psec_input_name' value={name} readonly/></label>
             <label className='profile_label' >E-mail :       <input type="text"  className='psec_input' value={email} readonly/></label>
             <label className='profile_label' >Phone number : <input type="text"  className='psec_input' value="995976XXXX" readonly/></label>
           </div>
         </div>

      </div>
    </div>
  )
}

export default Profile
