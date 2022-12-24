import React from "react";
import Homeproduct from "./Homeproduct.json";

function Homefilter() {
  return (
    <div>

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

export default Homefilter;
