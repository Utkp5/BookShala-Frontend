import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css"
import img2 from "../../Assets/Images/img2.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {

  const [userEmail,setuserEmail] = useState();
  const [password,setpassword] = useState();

  const Handlesubmitlogin = async() => {

    const user = {userEmail,password};

    await axios.post("http://localhost:5000/api/Signin",user).then(function (response) {
    

      if (response.data) {
        toast.success("Login Successfully");
        console.log(`User login successfully`);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userID",response.data.userID);
        localStorage.setItem("firstName",response.data.firstName);
        window.location.href = "/Shop";
      }

    }).catch(function (error) {
        toast.warning("invalid credentials");
        console.log(`invalid credentials`);
    })
  }


  return (
    <div>

      <Navbar />
      <div class="parent1">
          <img src={img2} alt="logo" className="signin_gif"/>
        <div class="login1">
          <h2 id="sgnin_h3">Hey Welcome Back 👋</h2><br />
          <p>Enter The Information You Entered while Registering!</p>
          <div className="signinform">
          <input className="input_signin" type="email" name="userEmail" placeholder="E-mail Address" onChange={(e) => {
            setuserEmail(e.target.value);
          }} />
          <br />
          <input className="input_signin" type="password" name="password" placeholder="Password" onChange={(e) => {
            setpassword(e.target.value);
          }} />
          <div class="remember_form">
            <NavLink to="/Forgotpassword" className="signin_nav">Forgot Password ?</NavLink>            
          </div>
          <button type="submit" className="signin_btn" onClick={() => {
            Handlesubmitlogin();
          }}>Log in</button>
        </div>
        </div>
      </div>

      <ToastContainer />

    </div>
  );
}

export default Signin;
