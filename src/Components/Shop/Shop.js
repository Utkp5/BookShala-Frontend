import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Shop.css";
import axios from "axios";


//icons
import { IoIosStar } from "react-icons/io";


function Shop() {

  const [book,setbook] = useState([]);
  
  useEffect(() => {

    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };


    async function fetchData() {
      try {
        
        const bookApi = (
          await axios.get("http://localhost:5000/api/books/getBooks",{})
        ).data;

        setbook(bookApi);
        console.log(bookApi);

      } catch (error) {

        console.log(error);
      }
    }

    fetchData();
  }, []);





  return (
    <div>
      <Navbar />

      <div className="shop_banner">
        <h2 className="shop_h2">Make your Books as your best buddy from day first </h2>
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
                {
                  book.map((shop_card) => {
                      return (
                              <div className="shop_card">
                                  <div className="shop_card_div"><img className="shop_card_img" src={shop_card.bookImg} alt="img" /></div>
                                  <div className="shop_card_cont">
                                      <p className="shopcard_Title" >{shop_card.bookTitle}</p>
                                      <p className="shopcard_Author" >{shop_card.type} | {shop_card.bookAuthor}</p>
                                      <p className="shopcard_Genres" >{shop_card.genres} | {shop_card.language}</p>
                                      <div className="shopcard_rating">
                                      <p><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/></p>
                                      <p>{shop_card.rating}</p>
                                      </div>
                                      <p className="shopcard_Lang" >₹&nbsp;{shop_card.price}</p>
                                      <button className="shophome_cart_msg">Add to cart</button>
                                  </div>
                              </div>
                              )
                          })
                }
            </div>
          
          </div>

      </div>




    </div>
  );
}

export default Shop;
