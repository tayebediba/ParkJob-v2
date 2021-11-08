import { Avatar } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { commentCardData } from "../../../../../constant/home/comments/cartData";

import classes from "./slider.module.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 1,
            slidesPerGroup: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 1,
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 1,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={classes.swiperContainer}
      >
         <TopFreelancersCard data={item} key={item.id} />
        {commentCardData.map(({ image, username, job, comment }) => (
          <SwiperSlide key={username}>
            {({ isActive }) => (
              <div
                className={
                  !isActive
                    ? `${classes.slideBox} ${classes.notActive}`
                    : classes.slideBox
                }
              >
                <Avatar
                  className={classes.avatarBox}
                  src={image}
                  alt={username}
                />
                <h6>{username}</h6>
                <span>{job}</span>
                <p>{comment} </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
