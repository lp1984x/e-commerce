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
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Prodcard
              category={item.category}
              brand={item.brand}
              image={item.images[0]}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
