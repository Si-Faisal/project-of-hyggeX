
import React, { useRef, useState } from 'react';
import bannar from '../../assets/bannar.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './slider.css'

const Slider = () => {
    return (
        <div>
            <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='bannar-img' src={bannar} alt="" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;