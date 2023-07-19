import { useState } from "react"
import logo from '../assets/logo.svg'
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <img src={logo} alt="" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">For Creators</a>
          </li>
          <li>
            <select name="" id=""> <option value="">For brands</option> </select>
          </li>
          <li>
          <select name="" id=""> <option value="">Resources</option> </select>
          </li>
          
        </ul>
        <div className="button">
        <button className="login primary-btn">Book a demo<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 25" fill="none">
            <path d="M18.6933 7.1C18.6933 7 18.5867 6.9 18.48 6.8C18.3733 6.7 18.2667 6.6 18.16 6.6C18.0533 6.5 17.84 6.5 17.7333 6.5H8.13333C7.49333 6.5 7.06667 6.9 7.06667 7.5C7.06667 8.1 7.49333 8.5 8.13333 8.5H15.1733L6.32 16.8C5.89333 17.2 5.89333 17.8 6.32 18.2C6.53333 18.4 6.74667 18.5 7.06667 18.5C7.38667 18.5 7.6 18.4 7.81333 18.2L16.6667 9.9V16.5C16.6667 17.1 17.0933 17.5 17.7333 17.5C18.3733 17.5 18.8 17.1 18.8 16.5V7.5C18.8 7.4 18.8 7.2 18.6933 7.1Z" fill="white"/>
          </svg></button>
        </div>
      </div>
    </nav>
  );
}