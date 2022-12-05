import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';
import logo from "../../images/logo.png"
import { NavLink } from "react-router-dom";
import './Navbar.css';


function App() {
  const [menu,setmenu] = useState(false);

  return (
    <div className="App">

       <div className='navbar'>

            <div>
            <a href="/"><img src={logo} alt="" className='logo'/></a>
            </div>


              <ul className={menu ? 'navbar_mobile_css' :  'navbar_ul'}>
                <li><NavLink  to ="/">       Home   </NavLink></li>
                <li><NavLink  to ="/About">  About  </NavLink></li>
                <li><NavLink  to ="/Blog">   Blog   </NavLink></li>
                <li><NavLink  to ="/Shop">   Shop   </NavLink></li>
                <li><NavLink  to ="/Contact">Contact</NavLink></li>
                <li><button className='button_signup'>Signup</button></li>
                <li><button className='button_login'>Signin</button></li>
              </ul>
              <div className='menu_icon' onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={46} /> :<HiMenu size={46} />}
              </div>

        </div>

    </div>
  );
}


export default App;