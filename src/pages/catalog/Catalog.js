import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'
import { Footer, Catalog as CatalogProduct } from '../../containers'

import "./catalog.css"

const Catalog = () => {
  return (
    <div className='catalog'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Catalog