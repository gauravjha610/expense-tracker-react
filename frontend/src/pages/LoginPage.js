import React from 'react'
import '../styles/LoginPage.css'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="loginBody">

      <div className="logo">
        <Link to="/">Expense Tracker <i className="fa-solid fa-wallet"></i></Link>
      </div>

      <div className='loginContainer'>
        <h1>Login Page</h1>
        <input type="email" name="email" placeholder='Enter Email'/>
        <input type="password" name="password" placeholder='Enter Password'/>
        <button type="submit">Login</button>
        <h3>New User? <Link to="/signup">Signup</Link></h3>
      </div>

    </div>
  )
}

export default LoginPage