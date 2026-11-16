import "./portfolio.css";

import mobileAppImage from "../../assets/mobile_project.jpeg";
import webImage from "../../assets/web_project.jpeg";
import backendImage from "../../assets/backend.jpg";
import ragImage from "../../assets/embedding-system-img.jpg.jpg";

import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: "AI-Powered Resume Search & Recruiting Assistant (RAG)",
      img: ragImage,
      imgClassName: "portfolio__item-img--wide",
      featured: true,
      description:
        "An n8n RAG pipeline that lets recruiters query and compare candidates in plain language. Resumes (PDF/DOCX/TXT/MD) are parsed with Docling, split by section with candidate metadata, and embedded into pgvector; a Claude Sonnet AI agent answers only from the resumes and cites the candidate behind each claim.",
      technologies: "n8n | AWS Bedrock (Claude Sonnet, Titan Embeddings v2) | PostgreSQL / pgvector | Docling | JavaScript",
      github: "https://github.com/fidaahammoud/embedding-system",
    },
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
          <article
            className={`portfolio__item${pro.featured ? " portfolio__item--featured" : ""}`}
            key={pro.id}
          >
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className={pro.imgClassName} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {pro.github && (
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
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
