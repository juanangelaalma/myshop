import React from 'react'

const CardProduct = () => {
  return (
    <div className="catalog__products-product">
      <div className='catalog__products-product_image'>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
      </div>
      <div className='catalog__products-product_content'>
        <h4 className='catalog__products-product_content-name'>
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
        </h4>
        <h5 className='catalog__products-product_content-price'>
          109$
        </h5>
      </div>
    </div>
  )
}

export default CardProduct