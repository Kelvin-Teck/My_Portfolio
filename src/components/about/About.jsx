import React from 'react'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from "react-icons/vsc";


import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="kelvin" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident incidunt hic nulla aliquid et deleniti rem rerum eligendi quis!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About