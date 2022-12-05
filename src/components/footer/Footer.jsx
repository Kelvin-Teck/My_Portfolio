import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        ENEH KELVIN CHUKWUEMEKA
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
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
         <a
        href="https://www.linkedin.com/in/eneh-chukwuemeka-kelvin-694a42198/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kelvin-Teck" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/KelvinEneh_"
        rel="noreferrer"
        target="_blank"
      >
        <IoLogoTwitter />
      </a>
      <a href="www.instagram.com" rel='noreferrer' target='_blank'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Eneh Kelvin Chukwuemeka. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
       

export default Footer