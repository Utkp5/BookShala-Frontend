import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import stand from "../../Assets/Banners/stand.png";
import Slider_home from "../../Views/Slider_home/Slider_home";

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
      </div>
      <Slider_home />
    </div>
  );
}

export default Home;
