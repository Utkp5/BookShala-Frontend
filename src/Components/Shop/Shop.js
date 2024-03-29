import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Shop.css";
import axios from "axios";
import { useCart } from "react-use-cart";
import Footer from "../Footer/Footer"

//icons
import { IoIosStar } from "react-icons/io";
import { NavLink } from "react-router-dom";


function Shop() {

  const [book,setbook] = useState([]);
  const { addItem } = useCart();
  
  useEffect(() => {

    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };

    fetchData();

  }, []);

  async function fetchData() {
      try {
        
        const bookApi = (
          await axios.get("https://busy-gray-dibbler-wear.cyclic.app/api/books/getBooks",{})
        ).data; //here we have used data bcz we want only data to show in console if dont write then alsi its ok ucantry

        setbook(bookApi);
        console.log(bookApi);

      } catch (error) {

        console.log(error);
      }
    }

  //Filter

  //Languages english
  const engbook = (englang) => {
    const fbook = book.filter((value) => {
      return value.language == englang;
    })
    setbook(fbook);
    
  }

  //Languages Hindi
  const Hindibook = (Hindilang) => {
    const fbook = book.filter((value) => {
      return value.language == Hindilang;
    })
    setbook(fbook);
    
  }

  //Languages Tamil
  const Tamilbook = (Tamillang) => {
    const fbook = book.filter((value) => {
      return value.language == Tamillang;
    })
    setbook(fbook);
  }

  //Languages Marathi
  const Marathibook = (Marathilang) => {
    const fbook = book.filter((value) => {
      return value.language == Marathilang;
    })
    setbook(fbook);
  }


  //Search functionality
  const[filter,setfilter] = useState('')

  const onChangeHandle = (e) => {
    setfilter(e.target.value);
  }

  


  return (
    <div>
      <Navbar />

      <div className="shop_banner">
        <h2 className="shop_h2">Make your Books as your best buddy from day first </h2>
      </div>

      <div className="shop_main">
        <input type="search" name="" id="" placeholder="Search here..." className="shop_search" value={filter}  onChange={onChangeHandle}/>
        
          <div className="shop_flex">
          
            <div className="shop_filter_div">
                <h2 className="shop_filter_h2">Categories</h2>
              <div className="shop_filter_Lang"> 
                  <h3>Languages</h3>
                  <div className="shop_filter_Lang_input">
                    <label className="shop_filter_label" onClick={() => engbook('English')}><input className="shop_filter_input" type="radio" name="options" id="" />English</label>
                    <label className="shop_filter_label" onClick={() => Hindibook('Hindi')}><input className="shop_filter_input" type="radio" name="options" id="" />Hindi</label>
                    <label className="shop_filter_label" onClick={() => Tamilbook('Tamil')}><input className="shop_filter_input" type="radio" name="options" id="" />Tamil</label>
                    <label className="shop_filter_label" onClick={() => Marathibook('Marathi')}><input className="shop_filter_input" type="radio" name="options" id="" />Marathi</label>
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
                  book.filter((shop_card) => { //filter 
                    if (filter == "") {
                      return shop_card
                    }
                    else if(shop_card.bookTitle.toLowerCase().includes(filter.toLowerCase()) ||
                    shop_card.bookAuthor.toLowerCase().includes(filter.toLowerCase()) ||
                    shop_card.language.toLowerCase().includes(filter.toLowerCase()) ||
                    shop_card.genres.toLowerCase().includes(filter.toLowerCase())
                    ){
                      return shop_card
                    }
                  }).map((shop_card) => {  //map
                      return (
                              <div className="shop_card" key={shop_card.id} >
                                  <NavLink><div className="shop_card_div" onClick={() => {
                                    window.location.href="/Singlebook/" + shop_card._id;
                                  }}><img className="shop_card_img" src={shop_card.bookImg} alt="img" /></div></NavLink>
                                  <div className="shop_card_cont">
                                      <p className="shopcard_Title" >{shop_card.bookTitle}</p>
                                      <p className="shopcard_Author" >{shop_card.type} | {shop_card.bookAuthor}</p>
                                      <p className="shopcard_Genres" >{shop_card.genres} | {shop_card.language}</p>
                                      <div className="shopcard_rating">
                                      <p><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/></p>
                                      <p>{shop_card.rating}</p>
                                      </div>
                                      <p className="shopcard_Lang" >₹&nbsp;{shop_card.price}</p>
                                      <button className="shophome_cart_msg" onClick={() => addItem(shop_card)}>Add to cart</button>
                                  </div>
                              </div>
                              )
                          })
                }
            </div>
          
          </div>

      </div>

      <Footer />



    </div>
  );
}

export default Shop;
