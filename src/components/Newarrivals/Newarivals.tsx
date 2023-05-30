import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./newarrivals.scss";
import { useFetchData } from "../../dummyJson/dummyJson";
import Prodcard from "../Prodcard/Prodcard";
import { useAppDispatch } from "../../store/store";
import { addData } from "../../store/features/dataSlice";
import { Navigation } from "swiper";

export default function Newarivals() {
  const dispatch = useAppDispatch();
  const { data } = useFetchData();
  dispatch(addData(""));

  return (
    <div className="py-5">
      <h1 className="newarrivals__title">NEW ARRIVALS!</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Prodcard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
