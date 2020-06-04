import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/strenxible.png";

const Strenxible = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">Strenxible</p>
        <p className="section__text">
          Strenxible is a fitness application for those who find it hard to go
          to the gym either due to lack of time or money. The app comes with two
          fitness plans, one for building strength and one for building
          flexibility. Users can easily install the application on their devices
          and can workout anytime and anywhere.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Comes with two fitness modes.
            </li>
            <li className="section__list-item">
              Keeps track of your personal progress.
            </li>
            <li className="section__list-item">
              Shows how to perform an exercise.
            </li>
            <li className="section__list-item">Progressive Web App</li>
          </ul>
        </div>
        {/* TECHNOLOGIES USED */}
        <p className="section__heading">Technologies used</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">React</li>
            <li className="section__list-item">Bootstrap (Reactstrap)</li>
            <li className="section__list-item">Photoshop</li>
          </ul>
        </div>
        {/* LINKS */}
        <p className="section__heading">Links to this project</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              <a
                href="https://strenxible.now.sh/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              <a
                href="https://github.com/varchasvipandey/strenxible"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
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

export default Strenxible;
