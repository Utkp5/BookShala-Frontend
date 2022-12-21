import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import stand from "../../Assets/Banners/stand.png";
import Slider_home from "../../Views/Slider_home/Slider_home";

//icons
import { FaTruck } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="Home_banner_div">
        <div className="Home_flex">
          <div className="Home_flex_div">
          <p className="Home_p">Let's make the best investments</p>
          <p className="Home_p1">There is no friends <br /> as loyal as <span id="span_home">books</span> </p>
          <p className="Home_p2">Read . Listen . Learn . Repeat</p>
          </div>
          <img src={stand} alt="" className="Home_stand" />
        </div>
        <Slider_home />
      </div>

      <div className="diagram">
            <div className="dia_div">
                <FaTruck size={36} color="dodgerblue"/>
                <div>
                  <p className="dia_div1_p">Free Shipping</p>
                  <p className="dia_div1_p1">Order over $50</p>
                </div>
            </div>
            <div className="dia_div">
              <FaUserLock size={36} color="dodgerblue"/>
              <div>
                <p className="dia_div1_p">Secure Payment</p>
                <p className="dia_div1_p1">100% Secure Payment</p>
              </div>
            </div>
            <div className="dia_div">
              <FaRedoAlt size={36} color="dodgerblue"/>
              <div>
                 <p className="dia_div1_p">Easy Return</p>
                 <p className="dia_div1_p1">10 days return policy</p>
              </div>
            </div>
            <div className="dia_div">
              <FaHeadset size={36} color="dodgerblue"/>
              <div>
              <p className="dia_div1_p">24/7 Support</p>
              <p className="dia_div1_p1">Call us anytime</p>
              </div>
            </div>
      </div>


    </div>
  );
}

export default Home;
