import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="section__heading">&copy; Varchasvi Pandey</p>
      <div className="footer__links">
        <a
          href="https://www.instagram.com/varchasvipandey/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/varchasvipandey"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://medium.com/@varchasvipandey"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <i class="fab fa-medium-m"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
