import { Link } from 'react-router-dom'
import React from 'react'
import Livechat from '../Livechatfiles/Livechat'
import Homeslider from '../HomeSliderfiles/Homeslider'
import './Homeproducts.css'



function Homeproducts() { 
  return (
    <div>
      {/* first-portion */}

      <div className="first-portion d-flex">
        {/* img-1 */}
        <div className="home-images-lawn">
        <Link to='/Women'><img  src='/src/assets/home-assets/lawn.png' alt='lawn'/></Link>
        </div>
        {/* img-2 */}
        <div className="embroided-printed"> 
          <div className="embroided">
            <Link to='/Women'><img src='/src/assets/home-assets/embroided.png'/></Link>
          </div>
          {/* img-3 */}
          <div className="printed">
            <Link to='/Women'><img src='/src/assets/home-assets/printed.png'/></Link>
          </div>
        </div>
      </div>
      {/* discount-image */}
      <div className="discount-image">
        <Link to='/Sale'><img src='/src/assets/home-assets/discount-img.png'/></Link>
      </div>

      {/* second portion */}
      <div className="second-portion d-flex">
        <div className="men-festive">
          <Link to='/Men'><img src='/src/assets/home-assets/men-festive.png'/></Link>
        </div>
        <div className="men-libass">
        <Link to='/Men'><img src='/src/assets/home-assets/men-libass.png'/></Link>
        </div>
      </div>

{/* third portion */}
<div className="third-portion d-flex">
        <div className="men-jacket-walking">
        <Link to='/Men'><img src='/src/assets/home-assets/men-jacket-walking.png'/></Link>
        </div>
        <div className="men-sitting">
        <Link to='/Men'><img src='/src/assets/home-assets/men-sitting.png'/></Link>
        </div>
      </div>
      <Homeslider/>
      <Livechat/>
    </div>
  )
}

export default Homeproducts