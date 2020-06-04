import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/covidata.png";

const CoviData = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">CoviData</p>
        <p className="section__text">
          CoviData is a simple and fast Covid-19 data application. This
          application can be used to check the status of Covid-19 in different
          parts of the world. The application is primarily built for mobile
          phones but it works and performs equally well on desktops.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Shows curremt status instantly.
            </li>
            <li className="section__list-item">
              Contains complete data on a separate page.
            </li>
            <li className="section__list-item">
              Makes single API request to fetch complete data.
            </li>
            <li className="section__list-item">
              Graphical representation of the status.
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
            <li className="section__list-item">Axios</li>
            <li className="section__list-item">Photoshop</li>
          </ul>
        </div>
        {/* LINKS */}
        <p className="section__heading">Links to this project</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              <a
                href="https://covidata.varchasvipandey.now.sh/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              <a
                href="https://github.com/varchasvipandey/coviData"
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

export default CoviData;
