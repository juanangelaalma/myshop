import React from 'react'
import { Outlet } from 'react-router-dom'

const Catalog = () => {
  return (
    <div>
      <div>Catalog</div>
      <Outlet />
    </div>
  )
}

export default Catalog