import React from "react";
import "./Overview.css";

import Profile from "../../images/profile-pic.png";

import Resume from "../../downloadables/Varchasvi Pandey_9013762844_2020.pdf";

const Overview = () => {
  return (
    <section className="section section-overview">
      <div className="profile-pic__container">
        <img className="profile-pic" src={Profile} alt="Varchasvi" />
      </div>
      <h1 className="site__heading">Varchasvi Pandey</h1>
      <p className="section__heading">Introduction</p>
      <p className="section__text">
        I'm a 20-year-old boy from New Delhi, India. I'm pursuing B.Tech in
        Computer Science and Engineering from GGSIP University and I'm currently
        in the final year of the degree. I spend much of my time on my desktop,
        learning web-technologies and making beautiful web-applications and
        producing music.
      </p>
      <p className="section__heading">Technologies I Use</p>
      <div className="section__list-container">
        <ul className="section__list">
          <p className="section__list-title">Primary Use</p>
          <li className="section__list-item">JavaScript</li>
          <li className="section__list-item">React</li>
          <li className="section__list-item">HTML 5</li>
          <li className="section__list-item">CSS 3</li>
          <li className="section__list-item">Firebase</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Libraries & Frameworks</p>
          <li className="section__list-item">SASS</li>
          <li className="section__list-item">BootStrap 4</li>
          <li className="section__list-item">Materialize CSS</li>
          <li className="section__list-item">JQuery</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Database</p>
          <li className="section__list-item">MongoDB</li>
          <li className="section__list-item">MySQL</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Other Skills</p>
          <li className="section__list-item">Photoshop</li>
          <li className="section__list-item">Illustrator</li>
          <li className="section__list-item">Adobe XD</li>
          <li className="section__list-item">Video Editing</li>
        </ul>
      </div>
      <p className="section__heading">WHAT YOU WILL FIND HERE</p>
      <p className="section__text">
        Here you will find all my web related work primarily. This blue
        navigation board is enough to help you walk through my profile and my
        projects. You will find a quick look of each project and two links for
        working application and Github repository respectively. You can also
        check my social links to find out more about my lifestyle and my music.
      </p>
      {/* Download resume  */}
      <p className="section__heading">Download Technical Resume</p>
      <p className="section__text">
        I'm primarily a{" "}
        <span className="section__text--imp">front-end web developer</span> and
        use modern tech stack. I'm a confident{" "}
        <span className="section__text--imp">React developer</span>, comfortable
        with both class-based and functional approach. I've created web
        applications extensively since the beginning of 2020.
        <br />
        Along with front-end development, I also have experience of back-end
        development using{" "}
        <span className="section__text--imp">Firebase services</span> and{" "}
        <span className="section__text--imp">Node.JS</span> with{" "}
        <span className="section__text--imp">MongoDB</span>.
        <br />
        I'm also quite familiar with front-end{" "}
        <span className="section__text--imp">prototyping</span> using Adobe XD,
        making usable <span className="section__text--imp">SVGs</span> using
        Adobe Illustrator and other{" "}
        <span className="section__text--imp">essential graphics</span> using
        Adobe Photoshop.
      </p>
      <a
        href={Resume}
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download Resume</button>
      </a>
    </section>
    // Content
  );
};

export default Overview;
