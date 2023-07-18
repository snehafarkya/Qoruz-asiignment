import React from 'react'
import power from '../assets/power.svg'
export default function Power() {
  return (
    <div>
      <div className="power">
        <div className="left">
        <span className='tagline'>Discover the power of <br /> 
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="141" height="8" viewBox="0 0 141 8" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M140.521 1.27007C138.329 -0.181856 78.6381 -0.482842 61.4587 0.859094C61.4324 0.859094 28.6729 3.04899 14.9242 3.04899C7.75285 3.04899 -4.60312 4.06294 1.76827 7.56877C2.80051 8.14374 25.3454 8.14374 32.1805 7.56877C48.4068 6.22684 79.1795 4.77491 104.924 4.41892C119.91 4.19993 129.945 3.78895 138.329 3.10399C140.65 2.913 141.682 2.03704 140.521 1.27007Z" fill="#FF6435"/>
        </svg>
        influencer marketing <br /> for your brand with <br />Qoruz!</span>

        </div>
        <div className="powerImage">
          <img src={power} alt="" className='imagee'/>
        </div>
      </div>
    </div>
  )
}
