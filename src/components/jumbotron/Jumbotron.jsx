import React from 'react'
import { useNavigate } from 'react-router-dom'

import headerImage from "../../assets/images/header_image.jpg"

import "./jumbotron.css"

const Jumbotron = () => {
  return (
    <div className='header__jumbotron section__margin'>
      <div className="header__jumbotron-content">
        <h1>Find the product you want on MYSHOP</h1>
        <p>Myshop is an e-commerce that can provide the best experience for buying and selling products</p>
        <a href='#catalog' className='btn-main'>Explore Products</a>
      </div>
      <div className="header__jumbotron-image">
        <img src={headerImage} alt="Explore products myshop" />
      </div>
    </div>
  )
}

export default Jumbotron