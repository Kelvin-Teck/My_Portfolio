import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        KELVIN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
         <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="www.facebook.com"><FaFacebookF/></a>
        <a href="www.instagram.com"><FiInstagram/></a>
        <a href="www.twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Eneh Kelvin Chukwuemeka. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
       

export default Footer