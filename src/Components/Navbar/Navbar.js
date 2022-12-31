import React from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { useState, useEffect } from 'react';
import logo from "../../Assets/Images/logo.png"
import { NavLink } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import './Navbar.css';


function App() {
  const [menu,setmenu] = useState(false);

  const [inout,setinout] = useState();
  const [inoutDirection,setDirection] = useState("/Signin");
  const [name,setname] = useState();
    
   useEffect(() => {
    let tokenval = localStorage.getItem("token");
    var Name = localStorage.getItem("firstName");

    if (tokenval) {
      setinout("Logout")
      setDirection("/")
      setname(Name);
    }
    else
    {
      setinout("Signin");
      setDirection("/Signin");
    }
   },[])


   const handleChnage = () => {
    let tokenval = localStorage.getItem("token");
    if (tokenval) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("firstName");
      window.location.reload();
    }
   }



   


  return (
    <div className="App">

       <div className='navbar'>

            <div>
            <a href="/"><img src={logo} alt="" className='logo'/></a>
            </div>


              <ul className={menu ? 'navbar_mobile_css' :  'navbar_ul'}>
                <li className="hover_li"><NavLink  to ="/">       Home   </NavLink></li>
                <li className="hover_li"><NavLink  to ="/About">  About  </NavLink></li>
                <li className="hover_li"><NavLink  to ="/Blog">   Blog   </NavLink></li>

                {
                  !localStorage.getItem('token') ? null :
                  <li className="hover_li"><NavLink  to ="/Shop">   Shop   </NavLink></li>
                }

                <li className="hover_li"><NavLink  to ="/Contact">Contact</NavLink></li>

                {
                  !localStorage.getItem('token') ?
                  <li><NavLink to="/Signup"><button className='button_signup'>Signup</button></NavLink></li>
                  : null
                }


                {
                  !localStorage.getItem('token') ? 
                  <li><NavLink to="/Signin"><button className='button_login'>Signin</button></NavLink></li>
                  :
                  <div className="dropdown">
                    <button className="dropbtn">{name} <HiOutlineChevronDown className="dropdown_icon"/></button>
                    <div className="dropdown-content" >
                      <NavLink to="/Profile" className="dropdown_navlink">Profile</NavLink> 
                      <NavLink to={inoutDirection} className="dropdown_navlink" onClick={() => {
                        handleChnage();
                      }}>{inout}</NavLink> 
                    </div>
                  </div>
                }

                <NavLink to ="/Cart"><HiShoppingCart size={32} color="#F9FFEA" className="cartIcon"/></NavLink>

              </ul>

              <div className='menu_icon' onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={46} /> :<HiMenu size={46} />}
              </div>

        </div>

    </div>
  );
}


export default App;