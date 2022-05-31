import React from "react";
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'

import './login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login__card">
        <h1>MYSHOP</h1>
        <form action="" className="login__card-form">
          <div className="login__card-form_container">
            <input type="text" placeholder="Joko Susilo" />
            <AiOutlineUser size={22} color="#000" />
          </div>
          <div className="login__card-form_container">
            <input type="text" placeholder="*********" />
            <AiOutlineLock size={22} color="#000" />
          </div>
          <button type="submit" className="btn-main">SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
