import React from 'react'
import { Navbar } from '../../components'
import { Footer } from '../../containers'

import "./about.css"

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <div className='about__content'>
        <h1>MYSHOP</h1>
        <p>Myshop is an e-commerce that can provide the best experience for buying and selling products</p>
        <div className="about__content-creator">
          <h5>Made by</h5>
          <p>Juan Angela Alma</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About