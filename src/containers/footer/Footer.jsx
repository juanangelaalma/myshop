import React from "react";

import reactLogo from "../../assets/logo/react.png";
import fakeStoreLogo from "../../assets/logo/fakestore.png";
import loveLogo from "../../assets/logo/love.png";
import { FooterItem } from "../../components";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__brand">
        <h1>MYSHOP</h1>
        <p>Copyright © 2022. Juan Angela Alma</p>
      </div>
      <div className="footer__content">
        <FooterItem title="Composition of website">
          <div className="footer__content-logo">
            <img src={reactLogo} alt="" />
            <img src={fakeStoreLogo} alt="" />
            <img src={loveLogo} alt="" />
          </div>
        </FooterItem>
        <FooterItem title="MYSHOP">
          <ul>
            <li className="footer__content-item_list">
              <a href="">Produk</a>
            </li>
            <li className="footer__content-item_list">
              <a href="">About</a>
            </li>
          </ul>
        </FooterItem>
        <FooterItem title="Contact">
          <ul>
            <li className="footer__content-item_list">
              <a href="">Instagram</a>
            </li>
            <li className="footer__content-item_list">
              <a href="">Linkedin</a>
            </li>
            <li className="footer__content-item_list">
              <a href="">Whatsapp</a>
            </li>
          </ul>
        </FooterItem>
      </div>
    </div>
  );
};

export default Footer;
