import React from "react";
import "./portfolio.css";
import ME01 from "../../assets/original-6820f1f7800569bdf6c823d315e0b802.webp";
import ME02 from "../../assets/original-5a5cc717f0dad1fcd2b71dd714e52b6e.webp";

const data = [
  {
    id: 1,
    image: ME01,
    title: "Architecture Landing Page",
    github: "https://github.com/Kelvin-Teck/",
    demo: "https://dribbble.com/shots/18472933-360-Architecture-Landing-Page",
  },
  {
    id: 2,
    image: ME02,
    title: "Fenisha-Furniture",
    github: "https://github.com/Kelvin-Teck/",
    demo: "https://dribbble.com/shots/18472946-Fenisha-Furniture-Website",
  },
];



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return (
             <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href={demo} className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
          )
        })
       }
      </div>
    </section>
  );
};

export default Portfolio;
