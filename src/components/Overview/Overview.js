import React from "react";

const Overview = () => {
  return (
    <section className="section section-overview">
      <h1 className="site__heading">Varchasvi Pandey</h1>
      <p className="section__heading">Introduction</p>
      <p className="section__text">
        I'm a 20-year-old boy from New Delhi, India. I'm pursuing B.Tech in
        Computer Science and Engineering from GGSIP University and I'm currently
        in the final year of the degree. I spend much of time on my desktop,
        learning web-technologies and making beautiful web-applications and
        producing music.
      </p>
      <p className="section__heading">Technologies I Use</p>
      <div className="section__list-container">
        <ul className="section__list">
          <p className="section__list-title">Primary Use</p>
          <li className="section__list-item">JavaScript</li>
          <li className="section__list-item">React</li>
          <li className="section__list-item">NodeJS</li>
          <li className="section__list-item">Express</li>
          <li className="section__list-item">MongoDB</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Libraries & Frameworks</p>
          <li className="section__list-item">JQuery</li>
          <li className="section__list-item">SASS</li>
          <li className="section__list-item">BootStap 4</li>
          <li className="section__list-item">Materialize CSS</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Rarely Use</p>
          <li className="section__list-item">MySQL</li>
          <li className="section__list-item">C Programming</li>
          <li className="section__list-item">Python</li>
        </ul>
        <ul className="section__list">
          <p className="section__list-title">Other Skills</p>
          <li className="section__list-item">Photoshop</li>
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
    </section>
    // Content
  );
};

export default Overview;
