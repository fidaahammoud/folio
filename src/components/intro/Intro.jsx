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
  I'm a recent graduate in Computer Science for Business from Saint Joseph University of Lebanon. I have completed my degree in Computer Science for Business, where I developed a strong foundation in both technical and business aspects of the field.<br/><br/>
  I have a solid proficiency in web and mobile development, with experience using technologies such as React, React Native, and Laravel PHP. For my final year project, I developed a comprehensive recipe-sharing platform, utilizing React for the website, React Native for the mobile application, and Laravel PHP for the server backend.<br/><br/>
  I am eager to apply my skills in a professional setting and am currently seeking opportunities in web development where I can contribute to innovative projects and grow my expertise. In addition to my technical skills, I am passionate about problem-solving and have a keen interest in learning new technologies.
</p>

        </div>
      </div>
    </section>
  );
};

export default Intro;
