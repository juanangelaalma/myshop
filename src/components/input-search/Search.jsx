import React from 'react'
import { BiSearchAlt } from "react-icons/bi"

import "./search.css"

const Search = () => {
  return (
    <div className='header__navbar-search'>
      <input type="text" placeholder="Search anything..." />
      <BiSearchAlt size={22} color="#000" />
    </div>
  )
}

export default Search