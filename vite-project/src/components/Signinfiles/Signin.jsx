import React from 'react'
import {Link} from 'react-router-dom'
import './Signin.css'

function Signin() {
  return (
    <div className="container-signin">
      <div className="signin-box">
        {/* logo */}
        <div className="signin-logo">
        <img src='/src/assets/home-assets/navbar-logo.png'/>
        </div>
        {/* form */}
        <form>
          <label>Email<sup style={{color:'red'}}>*</sup></label><br/>
          <input type='email' placeholder='example@gmail.com'/><br/>
          <label>Password<sup style={{color:'red'}}>*</sup></label><br/>
          <input type='password' placeholder='Password'/><br/>
        </form>
        {/* forget password */}
        <div className="forget-password">
        <a href='https://www.example.com'><p>Forgot your password?</p></a>
        </div>
        {/* button */}
        <div className="button-signin">
        <a href='#'><button>Signin</button></a>
        </div>
        <div className="signin-line">
        <hr/><sup>Signin with</sup><hr/>
        </div>
        {/* google-icon */}
        <div className="google-icon">
<Link to='/'><img src='/src/assets/Signin-assets/google-icon.png'/></Link>
          </div>
      </div>
    </div>
  )
}

export default Signin