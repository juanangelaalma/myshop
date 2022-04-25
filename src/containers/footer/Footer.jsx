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
        <h1>MYSHOP</h1>
        <p>Copyright © 2022. Juan Angela Alma</p>
      </div>
      <div className="footer__content">
        <FooterItem title="Composition of website">
          <div className="footer__content-logo">
            <a target="_blank" href="https://reactjs.org">
              <img src={reactLogo} alt="React JS logo" />
            </a>
            <a target="_blank" href="https://fakestoreapi.com" >
              <img src={fakeStoreLogo} alt="Fake Store logo" />
            </a>
            <a target="_blank" href="https://github.com/juanangelaalma">
              <img src={loveLogo} alt="Love icon" />
            </a>
          </div>
        </FooterItem>
        <FooterItem title="MYSHOP">
          <ul>
            <li className="footer__content-item_list">
              <Link to="/products">Produk</Link>
            </li>
            <li className="footer__content-item_list">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </FooterItem>
        <FooterItem title="Contact">
          <ul>
            <li className="footer__content-item_list">
              <a target="__blank" href="https://www.instagram.com/juanalmaa/">Instagram</a>
            </li>
            <li className="footer__content-item_list">
              <a target="__blank" href="https://www.linkedin.com/in/juanangelaalma/">Linkedin</a>
            </li>
            <li className="footer__content-item_list">
              <a href="mailto:juanangelaalma@gmail.com">Email</a>
            </li>
          </ul>
        </FooterItem>
      </div>
    </div>
  );
};

export default Footer;
