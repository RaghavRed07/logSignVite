import { MdEmail } from 'react-icons/md';
import './signup.css';
import { FaLock } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import React, { useState } from "react"
import Login from './Login';

function Signup() {

  const changeRoute = () => {
    window.location.href = './login';
  }

  return (
    <>
  <div className='container'>

      <div className='header'>
        <div className="text">Sign Up</div>

        <div className="underline"></div>
      </div>
      
    <div className="inputs">

      <div className="input">
      <RiAccountCircleFill color=' #797979' className='icon icon-size' />
      <input type="text" placeholder='Name' required />
      </div>
      

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
      <div className="submit">Sign Up</div>
    </div>

    <div className="login-here">Already have an account? <span onClick={changeRoute}>Login Here!</span></div>


  </div>
    </>
  )
}

export default Signup;
