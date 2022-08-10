import React, {useContext} from 'react'
import { useState } from 'react'
import './AuthForm.css'
import {login, register} from '../../context/authContext/apiCalls'
import {AuthContext} from '../../context/authContext/AuthContext';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {dispatch} = useContext(AuthContext)

  const handleLogin = async () => {
   try {
    await login({email, password}, dispatch)
    await new Promise(done => setTimeout(() => done(), 3000)); 
    window.location.replace('/')
   } catch (error) {
      console.log(error);
   }
  }

  const handleRegister = async () => {
    try {
      await register({username: name, email, password,}, dispatch)
      await new Promise(done => setTimeout(() => done(), 3000)); 
      window.location.replace('/')
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='authForm'>
      <div className="authForm__info">
        <img src="https://assets-global.website-files.com/6027ab9296f259a23eb6d66d/614b7b1a8daf4904a5d8b873_cwj-logo-primary.svg" width="150" alt="Content Writing Jobs" height="50" />
        <h2>Welcome back</h2>
      </div>
      <div className="authForm__form">
        {!isLogin && (
          <div className="formGroup">
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="name" placeholder='First Name' onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className="formGroup">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Passowrd' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={isLogin ? handleLogin : handleRegister}>{isLogin ? 'Login' : 'Register' }</button>
      </div>
      <div className="authForm__switch-container">
          {isLogin ? (
            <button>Need an account? <span className="authForm__switch" onClick={() => setIsLogin(false)}>Sign up here</span></button>
          ) : (
            <button>Already a member? <span className="authForm__switch" onClick={() => setIsLogin(true)}>Login in here</span></button>
          )}
      </div>
    </div>
  )
}

export default AuthForm