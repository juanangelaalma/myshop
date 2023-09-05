import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({ id, image, title, price }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    return navigate(`/products/${id}`)
  }

  return (
    <div onClick={handleClick} className="catalog__products-product">
      <div className='catalog__products-product_image'>
        <img src={image} alt="" /> 
      </div>
      <div className='catalog__products-product_content'>
        <h4 className='catalog__products-product_content-name'>
          { title }
        </h4>
      </div>
    </div>
  )
}

export default CardProduct