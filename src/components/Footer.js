import React from 'react'
import logo from '../assets/logo.svg'
import { social } from './social'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="foot1">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laborum minus quas iusto, libero id neque adipisci iste aperiam qui!</p>
              <div className="flex-foot-icons">
                {social.map((item)=> {
                  return <>
                  <img src={item.iamge} alt="" />
                  </>
                } )}
              </div>
        </div>
        <div className="foot2">
          <p className='top'>For Business</p>
          <ul className='ul'>
            <li className='list'>
              <a href="" className='link'>Qoruz Business suite</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Qoruz Paid Collab</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Qoruz Perks</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Qoruz Flex</a>
            </li>
            
            

          </ul>
          <p className='top'>For influencer</p>
          <div className="foot-btn">
            <button className="primary-btn footer-btn">
              Create my profile <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11.9 0.845432C11.9 0.749978 11.8 0.654523 11.7 0.559069C11.6 0.463614 11.5 0.36816 11.4 0.36816C11.3 0.272705 11.1 0.272705 11 0.272705H2C1.4 0.272705 1 0.654523 1 1.22725C1 1.79998 1.4 2.1818 2 2.1818H8.6L0.3 10.1045C-0.1 10.4863 -0.1 11.0591 0.3 11.4409C0.5 11.6318 0.7 11.7273 1 11.7273C1.3 11.7273 1.5 11.6318 1.7 11.4409L10 3.51816V9.81816C10 10.3909 10.4 10.7727 11 10.7727C11.6 10.7727 12 10.3909 12 9.81816V1.22725C12 1.1318 12 0.940887 11.9 0.845432Z" fill="#FF6435"/>
            </svg>
            </button>
            </div>
        </div>
        <div className="foot3">
        <p className='top'>For Business</p>
          <ul className='ul'>
            <li className='list'>
              <a href="" className='link'>About us</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Blogs</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Careers</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Contact us</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Terms</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Privacy Policy</a>
            </li>
          
          </ul>
        </div>
        <div className="foot4">
        <p className='top'>For Business</p>
          <ul className='ul'>
          <li className='list'>
              <a href="" className='link'>Case studies</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Reports</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Playbooks</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Compare</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Curated Influencers list</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Tools</a>
            </li>
            <li className='list'>
              <a href="" className='link'>Templates</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
