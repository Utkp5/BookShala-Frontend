import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/Navbar";
import gif from "../../Assets/Images/signupGif.gif"
import { NavLink } from "react-router-dom";
import axios from "axios";

function Signup() {

  const [firstName,setfirstName] = useState();
  const [lastName,setlastName] = useState();
  const [userEmail,setuserEmail] = useState();
  const [password,setpassword] = useState();
  const [confirmPassword,setconfirmpassword] = useState();

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
          <input className="input_signup" type="text" name="firstName" placeholder="First Name" onChange={(e) => {
            setfirstName(e.target.value)
          }} />
          <input className="input_signup" id="input_signup" type="text"name="lastName"  placeholder="Last Name" onChange={(e) => {
            setlastName(e.target.value)
          }} />
          <br />
          <input className="input_signup" type="email" name="userEmail" placeholder="E-mail Address" onChange={(e) => {
            setuserEmail(e.target.value)
          }} />
          <br />
          <input className="input_signup" type="password" name="password" placeholder="Password" onChange={(e) => {
            setpassword(e.target.value)
          }} />
          <br />
          <input className="input_signup" type="password" name="confirmpassword" placeholder="Confirm Password" onChange={(e) => {
            setconfirmpassword(e.target.value)
          }} />
          <div class="remember_form">
            <span><input type="checkbox" /> &nbsp;Remember me</span>
            <span>You are creating an account, and agree to Bookshala <NavLink className="sgn_navlink">Terms of Service</NavLink> and <NavLink className="sgn_navlink">Privacy Policy</NavLink></span>
            <NavLink to="/Signin" className="signin_nav">Already a member</NavLink>
          </div>
          <button type="submit" className="signup_btn">Sign up</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
