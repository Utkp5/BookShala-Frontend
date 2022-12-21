import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import book_1 from "../../Assets/Homeimg/book-1.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider_home.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
        <SwiperSlide><img src={book_1} alt="" className="slider_homeimg"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
