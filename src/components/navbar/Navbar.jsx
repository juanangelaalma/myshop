import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import Search from '../input-search/Search'

import { Link } from 'react-router-dom'

import "./navbar.css"

const Menu = () => (
  <>
    <p className='active'> <Link to="/">Home</Link> </p>
    <p> <Link to="/products">Products</Link> </p>
    <p> <Link to="/about">About</Link> </p>
    <Search />
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='header__navbar'>
      <div className="header__navbar-links">
        <div className='header__navbar-links_logo'>
          <h1>MYSHOP</h1>
        </div>
        <div className="header__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="header__navbar-menu">
        { 
          toggleMenu
          ? <RiCloseLine size={27} color="#000" onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={27} color="#000" onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="header__navbar-menu_container scale-up-center">
              <Menu />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar