import React from 'react'
import heroimg from '../assets/heroImg.png'
export default function Hero() {
  return (
    <div>
      <div className="container">
        <div className="head">
        <div className="tag">
        <span className='top'>GRIN ALTERNATIVE</span>
        <span className='tagline'>
        Looking for a <br />
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="141" height="8" viewBox="0 0 141 8" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M140.521 1.27007C138.329 -0.181856 78.6381 -0.482842 61.4587 0.859094C61.4324 0.859094 28.6729 3.04899 14.9242 3.04899C7.75285 3.04899 -4.60312 4.06294 1.76827 7.56877C2.80051 8.14374 25.3454 8.14374 32.1805 7.56877C48.4068 6.22684 79.1795 4.77491 104.924 4.41892C119.91 4.19993 129.945 3.78895 138.329 3.10399C140.65 2.913 141.682 2.03704 140.521 1.27007Z" fill="#FF6435"/>
        </svg>
         leagues - ahead <br /> alternative to GRIN?</span>
        </div>

        <button className='primary-btn hero'>Get Started 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
          </svg>
        </button>
        </div>
        <div className="image">
        <img src={heroimg} alt="" className='imagee' />
        </div>
      </div>
    </div>
  )
}
