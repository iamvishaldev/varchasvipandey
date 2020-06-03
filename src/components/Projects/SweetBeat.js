import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/sweetbeat.png";

const SweetBeat = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">SweetBeat</p>
        <p className="section__text">
          SweetBeat is a musical application which is meant to provide
          entertainment. Users can play beats on this application using the
          provided drum pads. The application comes with two musical genres-
          Future Bass and Hip-Hop. The app is primarily built for mobile devices
          but users can also use this application on their desktops using Numpad
          on the keyboard.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Provides interactive-musical environment.
            </li>
            <li className="section__list-item">
              Comes with two popular musical genres.
            </li>
            <li className="section__list-item">
              Contains high-quality sounds.
            </li>
            <li className="section__list-item">
              Can be used in dark mode as well.
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
        <p className="section__heading">Links to project</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              <a
                href="https://sweetbeat.now.sh/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              <a
                href="https://github.com/varchasvipandey/sweetbeat"
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

export default SweetBeat;
