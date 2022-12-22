import React from 'react'
import Footer from '../Footer/Footer'
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
      
      <div className='about_cont1'>
        <img className='about_cont1_img' src="https://cdn.shopify.com/s/files/1/1288/2297/files/slider__bg.png?v=1644388302" alt="" />
        <div className='about_cont1_sub'>
            <div className='about_cont1_flex'>
                <img className='about_cont1_img1' src="https://bookland.dexignzone.com/xhtml/images/about/about1.jpg" alt="" />
                <img className='about_cont1_img2' src="https://bookland.dexignzone.com/xhtml/images/about/about2.jpg" alt="" />
            </div>
            <div className='about_cont1_div2'>
               <h2 className='about_cont1_h2'>Bookshala Is Best Choice For Learners</h2>
               <p className='about_cont1_p'>There are many variations of passages of available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
            </div>
        </div>
      </div>
      

      <div className='about_cont2'>
        <div className='about_cont2_img'></div>

          <div className='about_cont2_absolute'>
            <div className='about_cont2_sub'>
              <button className='about_cont2_btn'>Who we are</button>
              <h2 className='about_cont2_h3'>We care about your business than your money!</h2>
              <p className='about_cont2_p'>Bring to the table win-win survival strategies to ensure proactive domination.</p>
              <p className='about_cont2_p1'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Taking seamless key performance indicators offline to maximize the long tail.</p>
              <button className='about_cont2_btn1'>Learn more</button>
            </div>
             <img className='about_cont2_img1' src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/2022/03/meeting-3.jpg" alt="" />
          </div> 
           
      </div>






      <Footer />
    </div>
  )
}

export default About
