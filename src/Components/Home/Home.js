import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import stand from "../../Assets/Banners/stand.png";
import Slider_home from "../../Views/Slider_home/Slider_home";
import Slider_home1 from "../../Views/Slider_home1/Slider_home1"

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

      <div className="home_bnner">
        <div className="home_bnner_div1">
          <img className="home_bnner_div1_img" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_banner1.jpg" alt="" />
          <div className="home_bnner_sub1">
            <h3 className="home_bnner_div1_h3">Books make Great Gifts</h3>
            <p className="home_bnner_div1_p">Why not send the gift of a book to family & friends</p>
          </div>
        </div>

        <div className="home_bnner_div2">
          <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_banner2.jpg" alt="" />
          <div className="home_bnner_sub2">
            <h3 className="home_bnner_div2_h3">Sale 10% Off</h3>
            <p className="home_bnner_div2_p">Its all begins with a great book!</p>
          </div>
        </div>
      </div>

      <Slider_home1 />

      <div>
        <h3 className="home_filter_h3">Popular Collections</h3>
          <p className="home_filter_p">The Way You Choose</p>
          <div className="home_filter">
              <button className="home_filter_btn">Mystery</button>
              <button className="home_filter_btn">Romance</button>
              <button className="home_filter_btn">Thriller</button>
              <button className="home_filter_btn">Horror</button>
              <button className="home_filter_btn">Spritual</button>
          </div>
      </div>



    </div>
  );
}

export default Home;
