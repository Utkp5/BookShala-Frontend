import React, { useState } from "react";
import Homeproduct from "./Homeproduct.json";

//icons
import { IoIosStar } from "react-icons/io";

function Homefilter() {

    const [Hmbook,setHmbook] = useState(Homeproduct);


  return (
    <div>

            <div>
              <h3 className="home_filter_h3">Popular Collections</h3>
              <p className="home_filter_p">The Way You Choose</p>
              <div className="home_filter">
                <button className="home_filter_btn" onClick={() => ('Mystery')} >Mystery</button>
                <button className="home_filter_btn" onClick={() => ('Romance')} >Romance</button>
                <button className="home_filter_btn" onClick={() => ('Thriller')} >Thriller</button>
                <button className="home_filter_btn" onClick={() => ('Horror')} >Horror</button>
                <button className="home_filter_btn" onClick={() => ('Spritual')} >Spritual</button>
              </div>
            </div>


            <div className="product_main">
            {
                Homeproduct.map((home_product_card) => {
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
                                    <button className="home_cart_msg">Add to cart</button>
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
