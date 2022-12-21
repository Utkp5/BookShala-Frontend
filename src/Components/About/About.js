import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./About.css"

function About() {
  return (
    <div>
      <Navbar />
      <div className='about_bg'>
        <div className='about_bg_div'>About</div>
        <img src="https://bookpresstheme.com/html/assets/images/banner-image.png" alt="" />
      </div>
    </div>
  )
}

export default About
