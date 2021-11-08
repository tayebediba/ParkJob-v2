import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import classes from "./slider.module.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import TopFreelancersCard from "../../../components/TopFreelancers/TopFreelancersCard";
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Slider = ({ data }) => {
  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        className={classes.mySwiper}
      >
        {data.map((item, index) => (
          <SwiperSlide className={classes.SwiperSlide} key={index}>
            <TopFreelancersCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
