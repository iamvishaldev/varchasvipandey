import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/express-store.png";

const ExpressStore = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">Express Store</p>
        <p className="section__text">
          Express Store is an eCommerce website for purchasing musical
          instruments. It is a marketplace to find all kinds of instruments. It
          works just like any other eCommerce website but with slight ease of
          use.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Easiest interface for a full eCommerce website.
            </li>
            <li className="section__list-item">Products can be filtered.</li>
            <li className="section__list-item">Create and manage your cart.</li>
          </ul>
        </div>
        {/* TECHNOLOGIES USED */}
        <p className="section__heading">Technologies used</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">JavaScript</li>
            <li className="section__list-item">NodeJS</li>
            <li className="section__list-item">Express</li>
            <li className="section__list-item">MongoDB</li>
            <li className="section__list-item">JQuery</li>
            <li className="section__list-item">Bootstrap</li>
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
                href="https://express-store-app.herokuapp.com/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              <a
                href="https://github.com/varchasvipandey/express-store"
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

export default ExpressStore;
