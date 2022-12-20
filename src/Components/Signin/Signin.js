import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css"
import img2 from "../../Images/img2.jpg"
import { NavLink } from "react-router-dom";

function Signin() {
  return (
    <div>
      <Navbar />
      <div class="parent1">
          <img src={img2} alt="logo" className="signin_gif"/>
        <div class="login1">
          <h2 id="sgnin_h3">Hey Welcome Back 👋</h2><br />
          <p>Enter The Information You Entered while Registering!</p>
          <div className="signinform">
          <input className="input_signin" type="email" placeholder="E-mail Address"/>
          <br />
          <input className="input_signin" type="password" placeholder="Password"/>
          <div class="remember_form">
            <NavLink to="/Forgotpassword" className="signin_nav">Forgot Password ?</NavLink>            
          </div>
          <button type="submit" className="signup_btn">Log in</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
