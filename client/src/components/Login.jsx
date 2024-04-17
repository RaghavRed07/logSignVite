import { MdEmail } from 'react-icons/md';
import './login.css';
import { FaLock } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import React, { useState } from "react"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>

  <div className='container'>

      <div className='header'>
        <div className="text">Login</div>

        <div className="underline"></div>
      </div>
      
    <div className="inputs">

      <div className="input">
      <MdEmail color=' #797979' className='icon icon-size'/>
      <input type="email" placeholder='Email' required/>
      </div>

      <div className="input">
      <FaLock color=' #797979' className="icon"/>
      <input type="password" placeholder='Password' required />
      </div>
    </div>

<div className="forgot-password">Lost Password? <span>Click Here!</span></div>

    <div className="submit-container">
      <div className="submit">Login</div>
    </div>
    <div className="signup-here">Don't have an account? <span>Sign Up Here!</span></div>

    


  </div>
    </>
  )
}

export default Login;
