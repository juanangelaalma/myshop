import React, { useRef, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Search from "../input-search/Search";

import { Link } from "react-router-dom";

import "./navbar.css";
import { useSelector } from "react-redux";

const Menu = () => {
  const menu = useSelector((state) => state.menu);

  const { active } = menu;
  return (
    <>
      <p className={active === "home" ? "active" : ""}>
        {" "}
        <Link to="/">Beranda</Link>{" "}
      </p>
      <p className={active === "products" ? "active" : ""}>
        {" "}
        <Link to="/products">Produk Kami</Link>{" "}
      </p>
      <p className={active === "about" ? "active" : ""}>
        {" "}
        <Link to="/about">Tentang</Link>{" "}
      </p>
    </>
  );
};

const Navbar = () => {
  const menu = useRef();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header__navbar">
      <div className="header__navbar-links">
        <div className="header__navbar-links_logo">
          <Link to="/">
            <h1>PT DEWA NUSANTARA GLOBAL</h1>
          </Link>
        </div>
        <div className="header__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="header__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color="#000"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color="#000"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            ref={menu}
            className="header__navbar-menu_container scale-up-center"
          >
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
