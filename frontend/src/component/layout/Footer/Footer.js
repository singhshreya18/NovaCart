import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download NovaCart App for Android and iOS devices</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>NOVACART</h1>
        <p>Smart Shopping, Better Choices</p>

        <p>© 2026 NovaCart. All Rights Reserved.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>

        <a
          href="https://www.instagram.com/shreya.singh_004?igsh=MW5pZ3AxaXBnMGdhNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/shreya-singh-429b39251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/singhshreya18"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;