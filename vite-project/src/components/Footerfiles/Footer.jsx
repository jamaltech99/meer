import React from 'react'
import './Footer.css'


function Footer() {
const divstyle={
    height:'650px',
};


  return (
   <footer>
    <div className="logo-img-footer d-flex align-items-center justify-content-center">
    <img src='/src/assets/home-assets/navbar-logo.png'className='mt-5'/>
   </div>
   <div className="footerheadings d-flex justify-content-evenly flex-wrap gap-3">
    {/* about-heading */}
<div className="about">
<div className="about-heading fst-italic">
   <h4>About MEER</h4> 
</div>
<div className="about-para">
<a href='https://www.example.com'><p>About US</p></a>
<a href='https://www.example.com'><p>Careers</p></a>
<a href='https://www.example.com'><p>Company</p></a>
<a href='https://www.example.com'><p>Stores</p></a>
</div>
</div>
{/* customer-care */}
<div className="customer-care">
<div className="customer-care-heading fst-italic">
   <h4>Customer Care</h4> 
</div>
<div className="customer-care-para">
<a href='https://www.example.com'><p>Customer services</p></a>
<a href='https://www.example.com'><p>Store Locator</p></a>
<a href='https://www.example.com'><p>Shipping Policy</p></a>
<a href='https://www.example.com'><p>Customer Feedback</p></a>
<a href='https://www.example.com'><p>Return and Exchange</p></a>
<a href='https://www.example.com'><p id='para-privacy-policy'>Privacy Policy</p></a>
</div>
</div>
{/* get-intouch */}
<div className="get-intouch">
<div className="get-intouch-heading fst-italic">
   <h4>Get In Touch</h4> 
</div>
<div className="get-intouch-para">
<a href='mailto:fahadmian267@gmail.com'><p>info@meercollection.com</p></a>
<a href='https://www.example.com'><p>+92.30.00808877</p></a>
<a href='https://www.example.com'><p>Office # 17/N Block, Main Blvd,</p></a>
<a href='https://www.example.com'><p> Lyallpur Town,Faisalabad Pakistan</p></a>
<a href='https://www.example.com'><button id='contact-button'>Contact Us</button></a>
</div>
</div>
</div>
{/* Subscribe */}
<div className="subscribe">
<i className="fa-solid fa-envelope"></i>
<input type='email' placeholder='Enter Your Email'/>
<button>Subscribe</button>
</div>
{/* footer end line */}
<div className="lastdiv d-flex justify-content-around">
<div className="copyright">
  <p>Copyright 2023 <span id='copyright-color-change'><a href='/'>MEER Collection</a></span><br/>
All Rights Reserved</p>
</div>
{/* social media icon */}
<div className="social-media-icon d-flex">
  {/* facebook */}
  <a href='https://www.example.com' target='_blank'>
  <div className="facebook d-flex justify-content-center align-items-center">
  <i className="fa-brands fa-facebook-f fa-xl"></i>
  </div>
  </a>
{/* instagram */}
<a href='https://www.example.com' target='_blank'>
<div className="instagram d-flex justify-content-center align-items-center">
<i className="fa-brands fa-instagram fa-xl"></i>
</div>
</a>
{/* twitter */}
<a href='https://www.example.com' target='_blank'>
<div className="twitter d-flex justify-content-center align-items-center">
  <i className="fa-brands fa-twitter fa-xl"></i>
</div>
</a>
{/* youtube */}
<a href='https://www.example.com' target='_blank'>
<div className="youtube d-flex justify-content-center align-items-center">
<i className="fa-brands fa-youtube fa-xl"></i>
</div>
</a>
</div>
{/* privacy policy */}
<p className='privacy-policy text-dark'><span id='privacy-hover'>Privacy Policy</span> | <span id='privacy-hover'>Terms & Conditions</span><br/>
<span id='privacy-hover'>Quality Management Policy</span> | <span id='privacy-hover'>ISMS</span></p>

</div>
   </footer>
  )
}

export default Footer