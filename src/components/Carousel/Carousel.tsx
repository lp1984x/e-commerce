import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./carousel.scss";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="pt-3 pb-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="carousel__image" alt="" src="images/black.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__image" alt="" src="images/baner2.jpg" />
          <button className="carousel__button">SHOP NOW</button>
        </SwiperSlide>
        <SwiperSlide>
          <img className="carousel__image" alt="" src="images/banner.jpg" />
          <button className="carousel__button">SHOP NOW</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
