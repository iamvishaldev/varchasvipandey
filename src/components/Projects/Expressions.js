import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/expressions.png";

const Expressions = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">Expressions</p>
        <p className="section__text">
          Expressions is a simple, fast, secure and reliable app for buildinng
          professional web-portfolios with ease. Make a fully customized
          portfolio quickly and edit it anytime like the way you want. Share
          your unique portfolio with your personal Expressions link provided by
          the application. Expressions app provides a platform to job seekers so
          that they can present themselves to the job providers, who can search
          and contact the right person. Everyone should be able to create an
          appealing single page portfolio with ease and for free! Everyone
          should have the power to EXPRESS themselves.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Quick profile creation wizard.
            </li>
            <li className="section__list-item">Fully customizable looks.</li>
            <li className="section__list-item">
              Fully authenticated workflow.
            </li>
            <li className="section__list-item">
              Search the person based on skills
            </li>
          </ul>
        </div>
        {/* TECHNOLOGIES USED */}
        <p className="section__heading">Technologies used</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">React</li>
            <li className="section__list-item">Firebase</li>
            <li className="section__list-item">Illustrator</li>
          </ul>
        </div>
        {/* LINKS */}
        <p className="section__heading">Links to this project</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              <a
                href="https://expressions.vercel.app/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              Source Code (This is not an open source application)
            </li>
          </ul>
        </div>
      </div>
      {/* TEXT INFORMATION */}
      <div className="project-section-right">
        <img src={Preview} className="project__image" alt="coviData"></img>
      </div>
    </section>
  );
};

export default Expressions;
