import React from 'react'
import './Hero.scss'
import heroImg from '../../img/heroImg.png'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
            <div className="hero__inner">
                <div className="hero__top">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={heroImg} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={heroImg} alt="heroImg" /></SwiperSlide>
        <SwiperSlide><img src={heroImg} alt="heroImg" /></SwiperSlide>
        <SwiperSlide><img src={heroImg} alt="heroImg" /></SwiperSlide>
        <SwiperSlide><img src={heroImg} alt="heroImg" /></SwiperSlide>
        <SwiperSlide><img src={heroImg} alt="heroImg" /></SwiperSlide>
      </Swiper>
    <div className="hero__tomosha">
        <div className="hero__tomosha-left">
            <h2>Demon Slayer:  Qizil fonarlar kvartali {'{2-mavsum}'}</h2>
            <p>Tanjiro Kamado Qizil Nur tumanidagi jangda omon qolishga muvaffaq bo'lgan bo'lsa-da, uning katanasi jiddiy shikastlangan va uni almashtirish kerak edi. Shuning uchun Tanjiro o'zining singlisi Nezuko bilan yangi katana yasash uchun temirchi qishlog'iga boradi....</p>
        </div>
        <div className="hero__tomosha-right">
            <button>Tomosha qilish</button>
        </div>
    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
