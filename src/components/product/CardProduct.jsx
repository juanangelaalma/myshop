import React from 'react'

const CardProduct = ({ id, image, title, price }) => {
  return (
    <div className="catalog__products-product">
      <div className='catalog__products-product_image'>
        <img src={image} alt="" />
      </div>
      <div className='catalog__products-product_content'>
        <h4 className='catalog__products-product_content-name'>
          { title }
        </h4>
        <h5 className='catalog__products-product_content-price'>
          { price }
        </h5>
      </div>
    </div>
  )
}

export default CardProduct