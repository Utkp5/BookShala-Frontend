import React, { useState } from 'react'
import './Forgotpass.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import { NavLink } from 'react-router-dom';



function Forgotpassword() {


	const [userEmail,setuserEmail] = useState();
	
	const Handlereset = async() => {

		const user = {
			userEmail
		}
		await axios.post("http://localhost:5000/api/Frgtpassword",user).then(function (response) {
    
    if (response.data) {
      Notify.success('Reset password email has been sent Successfully!')
    //   window.location.href = "/resetpassword";
    }
    }).catch(function (error) {
        Notify.failure('Something went Wrong!')
        console.log(error);
    });      
}



  return (
	<div class="row">
		<h1>Forgot Password</h1>
		<h4 class="information-text">Enter your registered email to reset your password.</h4>
		<div class="form-group">
			<input type="email" id="user_email" onChange={(e) => {
				setuserEmail(e.target.value);
			}}/>
			<p><label for="username">Email</label></p>
			<button onClick={Handlereset}>Reset Password</button>
		</div>
		<div>
		  <NavLink to="/Signin" className="signin_nav">Signin Page</NavLink>
		</div>
	</div>
  )
}

export default Forgotpassword