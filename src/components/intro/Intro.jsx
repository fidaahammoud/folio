import "./intro.css";

import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/profile.jpeg'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>1 Completed Projects</small>
            </article>
          </div>
          <p>
  I am a Full-Stack Developer with a Bachelor’s degree in Computer Science from Saint Joseph University of Beirut, specializing in PHP, Laravel, MySQL, and WordPress. I build scalable and efficient web applications with a strong focus on clean architecture and user experience.
  <br /><br />
  Alongside my development experience, I am currently expanding my expertise toward Artificial Intelligence and Data-Driven Systems through self-learning, particularly in Agentic AI, Large Language Models, and multi-agent frameworks.
  <br /><br />
  I have hands-on experience building full-stack solutions, including a comprehensive recipe-sharing platform using React, React Native, and Laravel, which strengthened my ability to design and integrate complex systems.
  <br /><br />
  I am passionate about combining software engineering with modern AI technologies to build intelligent, scalable, and impactful applications.
</p>

        </div>
      </div>
    </section>
  );
};

export default Intro;
