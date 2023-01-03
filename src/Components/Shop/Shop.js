import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Shop.css";


function Shop() {
  return (
    <div>
      <Navbar />

      <div className="shop_banner">
        <h2 className="shop_h2">Books</h2>
      </div>

      <div className="shop_main">
        <input type="search" name="" id="" placeholder="Search here..." className="shop_search"/>
        
          <div className="shop_flex">
          
            <div className="shop_filter_div">
                <h2 className="shop_filter_h2">Categories</h2>
              <div className="shop_filter_Lang"> 
                  <h3>Languages</h3>
                  <div className="shop_filter_Lang_input">
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="English" id="" />English</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Hindi" id="" />Hindi</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Tamil" id="" />Tamil</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Marathi" id="" />Marathi</label>
                  </div>
              </div>
              <div className="shop_filter_Lang"> 
                  <h3>Format</h3>
                  <div className="shop_filter_Lang_input">
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Hardcover" id="" />Hardcover</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Paperbook" id="" />Paperbook</label>
                  </div>
              </div>
              <div className="shop_filter_Lang"> 
                  <h3>Genres</h3>
                  <div className="shop_filter_Lang_input">
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Mystery" id="" />Mystery</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Thriller" id="" />Thriller</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Horror" id="" />Horror</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Historical" id="" />Historical</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Romance" id="" />Romance</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Fiction" id="" />Fiction</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Fantasy" id="" />Fantasy</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Dystopian" id="" />Dystopian</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Spritual" id="" />Spritual</label>
                    <label className="shop_filter_label"><input className="shop_filter_input" type="checkbox" name="Realist" id="" />Realist</label>
                  </div>
              </div>

            </div>


            <div className="shop_products_div">
              Lorem ipsum dolor sit amet. 
            </div>
          
          </div>

      </div>




    </div>
  );
}

export default Shop;
