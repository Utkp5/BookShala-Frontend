import React, { useState } from "react";
import Homeproduct from "./Homeproduct.json";

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


            <div className="product_card">
                <img className="product_card_img" src="https://m.media-amazon.com/images/I/51oVTRsjcqL._AC_UY218_.jpg" alt="" />
                <div>
                    <p className="card_Title" >The Silent Patient</p>
                    <p className="card_Author" >hardcover | Alex Michaelides</p>
                    <p className="card_Genres" >Mystery</p>
                    <p className="card_Lang" >English</p>
                </div>
            </div>
    </div>
  );
}

export default Homefilter;
