import React from 'react'
import {data} from './data'
export default function About() {
  return (
    <div>
      <div className="about">
      <span className='about-head'>Qoruz vs Grin</span>
      <span className='compare'>Comparison</span>
      <p className='about-desc'>Qoruz helps you run effective influencer marketing campaigns that drive sales and increase brand recognition, taking your brand to the next level.</p>

      <div className="feature">
        <span className='fea'>Features</span>
        <span className='qoruz'>Qoruz</span>
        <span className='grin'>Grin</span>
      </div>
    {data.map((item)=>{
      return(
        <>
        <div className="feature detail">
        <span className='fea item1'>{item.feature}</span>
        <span className='qoruz item2'><img src={item.qoruz} alt="" /> </span>
        <span className='grin item3'><img src={item.grin} alt="" /> </span>
      </div>
        </>
      )
    })}
        
      </div>

    </div>
  )
}
