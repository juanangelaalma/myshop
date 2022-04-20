import React from 'react'
import { CardProduct } from '../../components'

import "./catalog.css"

const Catalog = () => {
  return (
    <div className='catalog section__padding'>
      <h1 className='catalog__title'>Products</h1>
      <div className='catalog__products'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <button className='btn-main'>See all products</button>
    </div>
  )
}

export default Catalog