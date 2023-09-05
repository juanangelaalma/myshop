import React from 'react'
import { useNavigate } from 'react-router-dom'

import headerImage from "../../assets/images/header.webp"

import "./jumbotron.css"

const Jumbotron = () => {
  return (
    <div className='header__jumbotron section__margin'>
      <div className="header__jumbotron-content">
        <h1>Temukan Produk yang anda inginkan di sini</h1>
        <p>PT DEWA NUSANTARA GLOBAL adalah perusahaan yang berdedikasi untuk memberikan solusi berbagai macam produk berkualitas tinggi kepada pelanggan kami.</p>
        <a href='#catalog' className='btn-main'>Temukan Produk</a>
      </div>
      <div className="header__jumbotron-image">
        <img src={headerImage} alt="Explore products myshop" />
      </div>
    </div>
  )
}

export default Jumbotron