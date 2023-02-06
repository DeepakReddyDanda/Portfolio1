import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Deepak</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://twitter.com/DeepakR69996353"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009378618370"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-messenger"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009378618370"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Coder. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
