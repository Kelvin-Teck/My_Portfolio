import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building and maintaining websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building web applications</p>
            </li>
          </ul>
        </article>
         <article className="service">
          <div className="service__head">
            <h3>Coding Training</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Teaching and training upcoming developers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Help guide people who wants to change career from a non-tech industry to the Tech Industry</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services