import React from 'react'
import { Jumbotron, Navbar } from '../../components'

const Header = () => {
  return (
    <div className='home__header'>
      <Navbar />
      <Jumbotron />
    </div>
  )
}

export default Header