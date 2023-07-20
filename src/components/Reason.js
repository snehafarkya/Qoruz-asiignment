import React from 'react'
import Tabs from './Tabs'
import reason from '../assets/reason.svg'

export default function Reason() {
  return (
    <div className='reason'>
      <div className="about ">
      <span className='about-head'>Qoruz vs Grin</span>
      <span className='compare'>4 Reasons to Use Qoruz Rather Than Grin</span>
      </div>
      <div className="tabs">
        <div className="tabdiv">
        <Tabs/>
        </div>
        <div className="reasonImage">
        <img src={reason} alt="" className='power-image' />
        </div>
      </div>
    </div>
  )
}
