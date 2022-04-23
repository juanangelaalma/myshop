import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardProduct } from '../../components'
import { fetchProducts, fetchProductsLimit } from '../../redux/actions/products'

import "./catalog.css"

const Catalog = ({ buttonMore, categories, all }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if(all) {
      dispatch(fetchProducts())
    }else {
      dispatch(fetchProductsLimit())
    }
  }, [])

  console.log(all)

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
        { products.loading && <p className='loading__bar'>loading...</p> }
        { (!products.loading && products.products) && products.products.map(product => (
          <CardProduct id={product.id} image={product.image} title={product.title} price={`${product.price}$`} />
        )) }
        { products.error && <p>{ products.error }</p> }
      </div>
      { buttonMore && <button className='btn-main'>See all products</button> }
    </div>
  )
}

export default Catalog