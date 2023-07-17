import React from 'react'
import heroimg from '../assets/heroImg.png'
export default function Hero() {
  return (
    <div>
      <div className="container">
        <div className="head">
        <div className="tag">
        <span className='top'>GRIN ALTERNATIVE</span>
        <span className='tagline'>Looking for a <br /> leagues - ahead <br /> alternative to GRIN?</span>
        </div>
        <button className='primary-btn'>Get Started ➡</button>
        </div>
        <div className="image">
        <img src={heroimg} alt=""  />
        </div>
      </div>
    </div>
  )
}
