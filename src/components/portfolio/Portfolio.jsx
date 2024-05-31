import "./portfolio.css";

import mobileAppImage from "../../assets/mobile_project.jpeg";
import webImage from "../../assets/web_project.jpeg";
import backendImage from "../../assets/backend.jpg";

import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Recipe sharing platform (Website) with React.js",
      img: webImage,
      description:
        "A comprehensive website that allows users to browse, share, and interact with recipes.",
      technologies: "Html | CSS | Javascript | React Js ",
      github: "https://github.com/fidaahammoud/webRecipeFood",
    },
    {
      id: 2,
      title: "Recipe sharing platform (mobile application) with React native",
      img: mobileAppImage,
      description:
      "A comprehensive mobile application that allows users to browse, share, and interact with recipes.",
      technologies: "Html | CSS | Javascript | React Js | React Router for routing",
      github: "https://github.com/fidaahammoud/recipefood",
    },
    {
      id: 3,
      title: "Recipe sharing platform Backend  with Laravel",
      img: backendImage,
      description: "Designed and implemented the server-side architecture for the recipe-sharing platform.",
      technologies: "Laravel Php | MySql | PhpMyAdmin",
      github: "https://github.com/fidaahammoud/recipe_sharing_api",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
