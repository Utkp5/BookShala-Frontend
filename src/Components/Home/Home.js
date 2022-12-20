import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import stand from "../../Assets/Banners/stand.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home_banner_div">
        <div>
          <div>
          <p>lorem10</p>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <img src={stand} alt="" className="Home_stand" />
        </div>
      </div>
    </div>
  );
}

export default Home;
