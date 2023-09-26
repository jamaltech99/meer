import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Homeslider.css';

// import required modules
import { Autoplay } from 'swiper/modules';


function Homeslider() {
  return (
    <div className='slider-portion'>
    <div className="feedback">
    <hr/><p>Customer Feedback</p><hr/>
    </div>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="whole-slider"
      >
        {/* slider-1 */}
        <SwiperSlide className='slider'><h3>Alice Miller</h3><p>Impressed with the quality and style! My go-to for trendy outfits.</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
        {/* slider-2 */}
        <SwiperSlide className='slider'><h3>David Spancer</h3><p>Outstanding service and unique designs. I always get compliments!</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
        {/* slider-3 */}
        <SwiperSlide className='slider'><h3>Emily Richard</h3><p>Absolutely love the fit and comfort. Highly recommend!</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
        {/* slider-4 */}
        <SwiperSlide className='slider'><h3>Fatima Umer</h3><p>Incredible variety and fast shipping. A must for fashion enthusiasts!</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
        {/* slider-5 */}
        <SwiperSlide className='slider'><h3>Olivia Holmes</h3><p>Affordable prices, top-notch fashion. Can't get enough of it!</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
        {/* slider-6 */}
        <SwiperSlide className='slider'><h3>Liam Smith</h3><p>Satisfied customer here! Great value for fashion-forward pieces.</p><span>&#11088;&#11088;&#11088;&#11088;&#11088;</span></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Homeslider