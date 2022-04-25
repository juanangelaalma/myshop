import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from '../../components'
import { Footer } from '../../containers'
import { setMenuActive } from '../../redux/actions/navbar'

import "./about.css"

const About = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0,0)
    // set menu active
    dispatch(setMenuActive("about"))
  }, [])
  
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