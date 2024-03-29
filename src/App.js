import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"
import { About, Catalog, Home, Product } from './pages'
import { Catalog as CatalogContainer } from './containers'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="products" element={<Catalog />}>
            <Route index element={<CatalogContainer buttomMore="false" all />} />
            <Route path=":idProduct" element={<Product />} />
            <Route path="category/:category" element={<CatalogContainer buttomMore="false" all />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App