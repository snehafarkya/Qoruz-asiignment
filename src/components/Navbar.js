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
        {/* hamburger svg code... */}
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
        <button className="login primary-btn">Book a demo</button>
        </div>
      </div>
    </nav>
  );
}