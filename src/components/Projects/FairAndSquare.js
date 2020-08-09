import React from "react";
import "./Projects.css";

import Preview from "../../images/projects/fair-and-square.png";

const FairAndSquare = () => {
  return (
    <section className="section section-project">
      {/* TEXT INFORMATION */}
      <div className="project-section-left">
        <p className="project__heading">Fair And Square</p>
        <p className="section__text">
          Fair And Square is an online gaming platform which is light-weight.
          The application is made primarily for desktop users only. This
          application also works fine on small mobile devices, but a keyboard is
          essential to play games. People can create an account and compete with
          other players worldwide.
        </p>
        <p className="section__heading">key features</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              Play arcade game to compete with others.
            </li>
            <li className="section__list-item">
              Also comes with a multiplayer ping-pong game.
            </li>
            <li className="section__list-item">
              Dynamic Leader board to keep track of the competition.
            </li>
            <li className="section__list-item">
              Dynamic news and updates to keep track of upcoming events.
            </li>
          </ul>
        </div>
        {/* TECHNOLOGIES USED */}
        <p className="section__heading">Technologies used</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">JavaScript</li>
            <li className="section__list-item">Phaser.io</li>
            <li className="section__list-item">NodeJS</li>
            <li className="section__list-item">Express</li>
            <li className="section__list-item">MongoDB</li>
            <li className="section__list-item">JQuery</li>
            <li className="section__list-item">Bootstrap</li>
            <li className="section__list-item">Photoshop</li>
          </ul>
        </div>
        {/* LINKS */}
        <p className="section__heading">Links to this project</p>
        <div className="section__list-container">
          <ul className="section__list">
            <li className="section__list-item">
              <a
                href="https://fair-and-square.herokuapp.com/"
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application
              </a>
            </li>
            <li className="section__list-item">
              <a
                href="https://github.com/varchasvipandey/fair-and-square"
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

export default FairAndSquare;
