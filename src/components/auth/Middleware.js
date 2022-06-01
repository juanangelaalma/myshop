import React from 'react'
import { Navigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

const Middleware = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "")

  if(token) {
    return <div> { children } </div>
  }

  return <Navigate to="/login" />
}

export default Middleware