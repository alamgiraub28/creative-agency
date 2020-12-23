import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import service1 from '../../../images/carousel-1.png';


const OurWorks = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="container px-5 py-5 bg-primary">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-100" src={service1} alt=""/></SwiperSlide>
      ...
    </Swiper>
    </div>
    
  );
};

export default OurWorks;