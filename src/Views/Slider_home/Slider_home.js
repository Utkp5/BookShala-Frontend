import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import book_1 from "../../Assets/Homeimg/book-1.png"
import book_2 from "../../Assets/Homeimg/book-2.png"
import book_3 from "../../Assets/Homeimg/book-3.png"
import book_4 from "../../Assets/Homeimg/book-4.png"
import book_5 from "../../Assets/Homeimg/book-5.png"
import book_6 from "../../Assets/Homeimg/book-6.png"
import book_7 from "../../Assets/Homeimg/book-7.png"
import book_8 from "../../Assets/Homeimg/book-8.png"
import book_9 from "../../Assets/Homeimg/book-9.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider_home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="home_slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_2} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_3} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_4} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_5} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_6} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_7} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_8} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_9} alt="" className="slider_homeimg"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
