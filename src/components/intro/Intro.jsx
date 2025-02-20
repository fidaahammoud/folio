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
          I am a Full-Stack Developer specializing in PHP, Laravel, MySQL, and WordPress, with a strong foundation in both technical and business aspects, gained through my Computer Science degree from Saint Joseph University of Beirut.<br/><br/>
          I have hands-on experience building scalable web solutions and have developed a comprehensive recipe-sharing platform using React, React Native, and Laravel PHP.<br/><br/>
          Currently, I work as a Full-Stack Developer, where I contribute to dynamic projects, enhance system efficiency, and continuously expand my expertise. Passionate about problem-solving and innovation, I thrive on learning and implementing new technologies.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Intro;
