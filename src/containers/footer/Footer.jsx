import React from "react";

import reactLogo from "../../assets/logo/react.png";
import fakeStoreLogo from "../../assets/logo/fakestore.png";
import loveLogo from "../../assets/logo/love.png";
import { FooterItem } from "../../components";

import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__brand">
        <h1>PT DEWA NUSANTARA GLOBAL</h1>
        <p>Copyright © 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
