import React from "react";
import "./../assets/css/header.css";
import logo from "./../assets/images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
const Header=()=>{
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return(
    <div className="header">
      <div className="header-content">
      <div className="logo-box">
        <img src={logo} alt="logo"/>
        <div className="logo-content">
          <div style={{fontWeight: '500',
          fontSize: '34px',
          lineHeight: '28px'}}>
          Raghav Buildtech</div>
          <div
           style={{fontWeight: '400',
           fontSize: '22px',
           lineHeight: '24px'}}
          >Repairs to Rennovation</div>
        </div>
      </div>
      <ul>
        <li>
          <Link 
           to=""
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Home
          </Link>
        </li>
        <li>
        <Link
           to="services"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Services
          </Link>
        </li>
        <li>
        <Link
           to="about"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            About Us
          </Link>
        </li>
        <li>
        <Link
           to="testimonials"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
        <Link
           to="contact"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}>
            Contact
          </Link>
        </li>

      </ul>
      </div>
      
    </div>
  )
}
export default Header;