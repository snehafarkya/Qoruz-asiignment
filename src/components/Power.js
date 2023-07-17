import React from 'react'
import power from '../assets/power.svg'
export default function Power() {
  return (
    <div>
      <div className="power">
        <div className="left">
        <span className='tagline'>Discover the power of <br /> influencer marketing <br /> for your brand with <br />Qoruz!</span>

        </div>
        <div className="powerImage">
          <img src={power} alt="" className='imagee'/>
        </div>
      </div>
    </div>
  )
}
