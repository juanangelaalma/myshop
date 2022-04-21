import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"
import { About, Catalog, Home, Product } from './pages'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="products" element={<Catalog />}>
            <Route path=":idProduct" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App