import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";

import ProfilePicture from "../../images/profile-pic.png";

const Sidenav = () => {
  const toggleDropDown = () => {};

  return (
    <nav className="nav">
      {/* PROFILE PICTURE */}
      <div className="nav-container img-container">
        <img
          src={ProfilePicture}
          alt="Varchasvi Pandey"
          className="profile-picture"
        ></img>
        <p className="profile-picture__caption">Varchasvi</p>
      </div>
      {/* OVERVIEW */}
      <div className="nav-container">
        <NavLink to="/" className="nav-item">
          Overview
        </NavLink>
      </div>

      <div className="nav-break" />

      {/* PROJECT LINKS */}
      <div className="nav-container nav-projects">
        <NavLink to="/expressions" className="nav-item">
          Expressions
        </NavLink>
        <NavLink to="/covidata" className="nav-item">
          CoviData
        </NavLink>
        <NavLink to="/strenxible" className="nav-item">
          Strenxible
        </NavLink>
        <NavLink to="/sweetbeat" className="nav-item">
          SweetBeat
        </NavLink>
        <NavLink to="/express-store" className="nav-item">
          Express Store
        </NavLink>
        <NavLink to="/fair-and-square" className="nav-item">
          Fair And Square
        </NavLink>
      </div>

      <div className="nav-container nav-projects-dropdown nav-item">
        <p className="drop-down-toggler" onClick={toggleDropDown}>
          Projects
        </p>
        <div className="drop-down">
          <NavLink to="/expressions" className="nav-item">
            Expressions
          </NavLink>
          <NavLink to="/covidata" className="nav-item">
            CoviData
          </NavLink>
          <NavLink to="/strenxible" className="nav-item">
            Strenxible
          </NavLink>
          <NavLink to="/sweetbeat" className="nav-item">
            SweetBeat
          </NavLink>
          <NavLink to="/express-store" className="nav-item">
            Express Store
          </NavLink>
          <NavLink to="/fair-and-square" className="nav-item">
            Fair And Square
          </NavLink>
        </div>
      </div>

      <div className="nav-break" />

      {/* BLOG LINKS */}
      <div className="nav-container">
        <NavLink to="/blogs" className="nav-item">
          Blogs
        </NavLink>
      </div>

      <div className="nav-break" />

      {/* LINKS */}
      <div className="nav-container sidenav__links">
        <a
          href="https://www.instagram.com/varchasvipandey/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidenav__link"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/varchasvipandey"
          target="_blank"
          rel="noopener noreferrer"
          className="sidenav__link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://medium.com/@varchasvipandey"
          target="_blank"
          rel="noopener noreferrer"
          className="sidenav__link"
        >
          <i class="fab fa-medium-m"></i>
        </a>
      </div>
    </nav>
    // CONTENT
  );
};

export default Sidenav;
