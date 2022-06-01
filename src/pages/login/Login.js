import React, { useEffect, useState } from "react";
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import Loader from "../../components/loader/Loader";
import useLocalStorage from "../../hooks/useLocalStorage";
import { login } from "../../redux/actions/auth";
import { LOGIN_FAILURE } from "../../redux/actions/type";

import './login.css'

const Login = () => {
  // state
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [token, setToken] = useLocalStorage("token", auth.token)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  if(auth.token) {
    setToken(auth.token)
    return <Navigate to="/" />
  }

  if(auth.error) {
    alert(auth.error)
    dispatch({ type: LOGIN_FAILURE, payload: null })
  }

  return (
    <div className="login">
      <div className="login__card">
        <h1>MYSHOP</h1>
        <form action="" onSubmit={handleSubmit} className="login__card-form">
          <div className="login__card-form_container">
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Joko Susilo" />
            <AiOutlineUser size={22} color="#000" />
          </div>
          <div className="login__card-form_container">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" />
            <AiOutlineLock size={22} color="#000" />
          </div>
          <button type="submit" className="btn-main">
            { auth.loading ? "LOADING..." : 'SIGN IN' }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
