import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="footer-text">Стоматологические инновации 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
