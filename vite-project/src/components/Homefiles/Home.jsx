import React from 'react';
import { Link } from 'react-router-dom'
import Homeproducts from '/src/components/Homeproductsfiles/Homeproducts'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
import { Autoplay, Pagination, Navigation,} from 'swiper/modules';


function Home() {
  return (
    <>
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >   
<SwiperSlide className='whole-swiper'><Link to='/Women'><img src='/src/assets/home-assets/hero-banner-large-1.jpg'/></Link></SwiperSlide>
<SwiperSlide className='whole-swiper'><Link to='/Women'><img src='/src/assets/home-assets/hero-banner-large-2.jpg'/></Link></SwiperSlide>
<SwiperSlide className='whole-swiper'><Link to='/Sale'><img src='/src/assets/home-assets/hero-banner-large-3.jpg'/></Link></SwiperSlide>
<SwiperSlide className='whole-swiper'><Link to='/Women'><img src='/src/assets/home-assets/hero-banner-large-4.jpg'/></Link></SwiperSlide>
</Swiper>
<div className="responsive-img-container"><Link to='/Sale'><img src='src/assets/home-assets/responsive-img.jpg'/></Link></div>
</div>
<Homeproducts/>
</>

  )
}

export default Home;





