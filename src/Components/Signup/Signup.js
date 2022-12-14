import React from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import gif from "../../Images/signupGif.gif";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Navbar />
      <div class="parent">
      <div>
        <img src={gif} alt="logo" className="signup_gif" />
      </div>
      <div class="login">
        <h3 id="sgn_h3">Create Account</h3>
        <div className="signupform">
          <input className="input_signup" type="text" placeholder="First Name"/>
          <input className="input_signup" id="input_signup" type="text" placeholder="Last Name" />
          <br />
          <input className="input_signup" type="email" placeholder="E-mail Address"/>
          <br />
          <input className="input_signup" type="password" placeholder="Password"/>
          <br />
          <input className="input_signup" type="password" placeholder="Confirm Password"/>
          <div class="remember_form">
            <span><input type="checkbox" /> &nbsp;Remember me</span>
            <span>You are creating an account, and agree to Bookshala <NavLink className="sgn_navlink">Terms of Service</NavLink> and <NavLink className="sgn_navlink">Privacy Policy</NavLink></span>
          </div>
          <button type="submit" className="signup_btn">Sign up</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
