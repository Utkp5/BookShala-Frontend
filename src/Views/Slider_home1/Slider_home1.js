import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider_home1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function App() {
  return (
    <div>
      <Swiper className="Slider_home1"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/84_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/83_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/82_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/79_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/81_inr.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/80_inr.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
