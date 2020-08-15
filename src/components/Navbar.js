import React from "react"

import navStyle from "../styles/Navbar.module.scss"
import logoBG from "../assets/logoBG.svg"
import logo from "../assets/MCLogo.svg"

const Navbar = (props) => {
  return (
    <nav className={navStyle.navigation}>
        <div className={navStyle.bg}>
            <img src={logoBG} className={navStyle.bgImg} alt="mc logo bg" />
            <div className={navStyle.logoContainer}>
                <img src={logo} className={navStyle.logoImg} alt="mc logo" />
          <h1 className={navStyle.logoText}>Micro Club</h1>
        </div>
      </div>
      <div className={navStyle.navLinks}>
        <ul className={navStyle.navList}>
          <li className={navStyle.navItem} onClick={() => {
            window.scroll(0, props.refs.aboutRef.current.offsetTop);
          }}>About Us</li>
          <li className={navStyle.navItem} onClick={() => {
            window.scroll(0, props.refs.eventRef.current.offsetTop);
          }}>Our Events</li>
          <li className={navStyle.navItem} onClick={() => {
            window.scroll(0, props.refs.contactRef.current.offsetTop);
          }}>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
