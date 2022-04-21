import React from 'react'
import { CardProduct } from '../../components'

import "./catalog.css"

const Catalog = ({ buttonMore, categories }) => {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }} className='catalog section__padding'>
      <h1 className='catalog__title'>Products</h1>
      { categories && (
        <div className='catalog__categories'>
          { categories.map(category => (
            <li>{ category }</li>
          )) }
        </div>
      ) }
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
      { buttonMore && <button className='btn-main'>See all products</button> }
    </div>
  )
}

export default Catalog