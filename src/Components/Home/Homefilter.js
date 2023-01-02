import React, { useState } from "react";
import Homeproduct from "./Homeproduct.js";
import Swal from 'sweetalert2';


//icons
import { IoIosStar } from "react-icons/io";

function Homefilter() {

    const [books,setHmbook] = useState(Homeproduct);

    //all
    const all = () => {
        const finalbook = Homeproduct.filter((value) => {
            return value
        })
        setHmbook(finalbook)
    }
    
    //Mystery book
    const Mysterybook = (cardgenres) => {
        const finalbook = Homeproduct.filter((value) => {
            return value.Genres == cardgenres
        })
        setHmbook(finalbook)
    }

    //Romancebook
    const Romancebook = (cardgenres) => {
        const finalbook = Homeproduct.filter((value) => {
            return value.Genres == cardgenres
        })
        setHmbook(finalbook)
    }

    //Thrillerbook
    const Thrillerbook = (cardgenres) => {
        const finalbook = Homeproduct.filter((value) => {
            return value.Genres == cardgenres
        })
        setHmbook(finalbook)
    }
    
    //Horrorbook
    const Horrorbook = (cardgenres) => {
        const finalbook = Homeproduct.filter((value) => {
            return value.Genres == cardgenres
        })
        setHmbook(finalbook)
    }

    //Spritualbook
    const Spritualbook = (productTitles) => {
        const finalbook = Homeproduct.filter((value) => {
          return value.Genres == productTitles
        }) 
      
        setHmbook(finalbook)
      }


      //homeCart

      const handleHomesubmit = () => {
        let token = localStorage.getItem('token');

        if (token) {

            Swal.fire({
                icon: 'info',
                title: '_________',
                text: 'Go to shop page to buy book',
             })
        }
        else
        {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please Login to continue',
             })
        }
      }



  return (
    <div>

            <div>
              <h3 className="home_filter_h3">Popular Collections</h3>
              <p className="home_filter_p">The Way You Choose</p>
              <div className="home_filter">
                <button className="home_filter_btn" onClick={() => all('')}>All</button>
                <button className="home_filter_btn" onClick={() => Mysterybook('Mystery')}>Mystery</button>
                <button className="home_filter_btn" onClick={() => Romancebook('Romance')}>Romance</button>
                <button className="home_filter_btn" onClick={() => Thrillerbook('Thriller')}>Thriller</button>
                <button className="home_filter_btn" onClick={() => Horrorbook('Horror')}>Horror</button>
                <button className="home_filter_btn" onClick={() => Spritualbook('Spritual')}>Spritual</button>
              </div>
            </div>


            <div className="product_main">
            {
                books.map((home_product_card) => {
                    return (
                            <div className="product_card">
                                <div className="product_card_div"><img className="product_card_img" src={home_product_card.img} alt="" /></div>
                                <div className="product_card_cont">
                                    <p className="card_Title" >{home_product_card.Title}</p>
                                    <p className="card_Author" >{home_product_card.Type} | {home_product_card.Author}</p>
                                    <p className="card_Genres" >{home_product_card.Genres} | {home_product_card.Language}</p>
                                    <div className="card_rating">
                                    <p><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/><IoIosStar color="orange" size={26}/></p>
                                    <p>{home_product_card.Rating}</p>
                                    </div>
                                    <p className="card_Lang" >{home_product_card.Price}</p>
                                    <button className="home_cart_msg" onClick={() => {
                                        handleHomesubmit();
                                    }}>Add to cart</button>
                                </div>
                            </div>
                            )
                        })
            }
           </div>
    </div>
  );
}

export default Homefilter;
