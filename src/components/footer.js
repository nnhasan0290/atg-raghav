import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./../assets/images/logo.svg";
import facebook from "./../assets/icons/facebook-f.svg";
import linkedin from "./../assets/icons/linkedin-in.svg";
import twitter from "./../assets/icons/twitter.svg";
import youtube from "./../assets/icons/youtube.svg";
import "./../assets/css/footer.css";
const Footer=()=>{
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="footer">
      <div className="footer-left">
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
        <div style={{margin:'15px 0'}}>
          <div style={{fontWeight:'300',fontSize:'14px',lineHeight:'15px',marginBottom:'15px'}}>CALL US TODAY</div>
          <div style={{fontWeight:'600',fontSize:'34px',lineHeight:'38px',marginBottom:'15px'}}>+91 8754502338</div>
        </div>
        <ul className="socials">
          <li className="social">
            <a href="/">
              <img src={twitter} alt="p1"/>
            </a>
          </li>
          <li className="social">
            <a href="/">
              <img src={facebook} alt="p1"/>
            </a>
          </li>
          <li className="social">
            <a href="/">
              <img src={linkedin} alt="p1"/>
            </a>
          </li>
          <li className="social">
            <a href="/">
              <img src={youtube} alt="p1"/>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'50px'}}>
         <div>
            <div style={{fontWeight: '400',
  fontSize: '22px',
  lineHeight: '26px'}}>Quick Links</div>
            <ul className="footer-nav">
              <li>
                <Link 
                to=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}>
                  Home
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
         <div>
          <div style={{fontWeight:'400',fontSize:'22px',lineHeight:'26px',marginBottom:'15px'}}>Office Address</div>
          <div style={{fontWeight:'400',fontSize:'18px',lineHeight:'26px',marginBottom:'15px',color: '#D4D7DD'}}>
          #173, Ragini, 2A Main Road,
          Block 7, Nagarabhavi 2nd Stage,  Bangalore - 560072
          </div>
          <div style={{fontWeight:'400',fontSize:'18px',lineHeight:'26px',marginBottom:'15px',color: '#D4D7DD'}}>ragainn@gmail.com</div>
         </div>
        </div>
        <div style={{color: '#D4D7DD'}}>
          <span style={{marginRight:'30px'}}>Site Map</span>
          <span>@2022 copyright raghavbuildtech</span>
        </div>
      </div>
  </div>
  )
}
export default Footer;