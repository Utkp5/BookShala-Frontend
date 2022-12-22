import React from 'react'
import "./Footer.css"
import logo from "../../Assets/Images/logo.png"

//icons
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { RiHeartFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

function Footer() {
  
  return (
    <div>

    <div className='footer_main'>

    <div className='footer'>
      <div className='footer_div1'>
        <img src={logo} alt="" className='logo_footer'/>
        <div className='footer_div1_sub'>
        <img src="https://bookpresstheme.com/html/assets/images/visa.png" alt="" />
        <img src="https://bookpresstheme.com/html/assets/images/mastercard.png" alt="" />
        <img src="https://bookpresstheme.com/html/assets/images/american-express.png" alt="" />
        <img src="https://bookpresstheme.com/html/assets/images/discover.png" alt="" />
        </div>
      </div>

      <div className='footer_div2'>
        <h3>Company</h3>
        <p>About</p>
        <p>Blog</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>

      <div className='footer_div3'>
        <h3>Policies</h3>
        <p>Privacy policy</p>
        <p>Terms of use</p>
        <p>Secure Shopping</p>
        <p>Copyright</p>
      </div>

      <div className='footer_div4'>
        <h3>Help</h3>
        <p>Payment</p>
        <p>Shipping</p>
        <p>Return</p>
        <p>FAQ</p>
      </div>
      </div>

      <hr/>
      <div className='newslttr'>
        <div>
        <p className='newslttr_p'>Subscribe to our Newsletter</p>
        <p className='newslttr_p1'>The latest news, articles and resources sent straight to your inbox every month.</p>
        </div>
        <div>
          <input className='email_footer' type="email" name="email_footer" id="" placeholder='Enter Your Email'/>
          <input className='submitfooter' type="button" value="Subscribe" />
        </div>
      </div>
      <hr/>

      <div className='footer_social_div'>
        <div><p >&copy; Copyright 2023 Bookshala pvt.</p></div>
        <div className='footer_social'>
            <NavLink><SlSocialLinkedin size={26} fill="black"/></NavLink>
            <NavLink><SlSocialDribbble size={26} fill="black"/></NavLink>
            <NavLink><SlSocialGithub size={26} fill="black"/></NavLink>
            <NavLink><SlSocialTwitter size={26} fill="black"/></NavLink>
            <NavLink><SlSocialInstagram size={26} fill="black"/></NavLink>
        </div>
      </div>

      <div className='madewithlove'>Made With Love&nbsp;<RiHeartFill color='red' size={26} id="heart"/>&nbsp;in India</div>
    </div>


    </div>
  )
}

export default Footer
