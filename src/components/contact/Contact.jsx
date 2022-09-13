import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_0tjua6k",
        "template_j6hvm9p",
        form.current,
        "F_4Hp-of0aKIjGUxN"
      )
    
      e.target.reset();

      
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kelvineneh4@gmail.com</h5>
            <a href="mailto:kelvineneh4@gmail.com" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+234 906 475 9040</h5>
            <a
              href="https://api.whatsapp.com/send?phone=09064759040"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Eneh Kelvin Chukwuemeka</h5>
            <a href=" https://m.me/KelvindoesDev" target="_blank">
              Send Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} method="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="text"
            name="message"
            row="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact