import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"
import { About, Catalog, Home, Product } from './pages'
import { Catalog as CatalogContainer } from './containers'
import Login from './pages/login/Login'
import Middleware from './components/auth/Middleware'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Middleware> <Home /> </Middleware>} />
          <Route path="home" element={<Middleware> <Home /> </Middleware>} />
          <Route path='about' element={<Middleware> <About /> </Middleware>} />
          <Route path="products" element={<Middleware> <Catalog /> </Middleware>}>
            <Route index element={<CatalogContainer buttomMore="false" all categories />} />
            <Route path=":idProduct" element={<Product />} />
            <Route path="category/:category" element={<CatalogContainer buttomMore="false" all categories />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App