import React from 'react'
import './Livechat.css'
import {Link} from 'react-router-dom'

function Livechat() {
  return (
    <>
    <Link to='https://www.example.com'><div className="live-chat"><i className="fa-solid fa-message fa-lg"></i></div></Link>
    </>
  )
}

export default Livechat