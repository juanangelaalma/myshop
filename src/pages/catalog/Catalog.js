import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'
import { Footer, Catalog as CatalogProduct } from '../../containers'
import { fetchProductsService } from '../../services/products.services'
import { fetchProducts } from '../../redux/actions/products'

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