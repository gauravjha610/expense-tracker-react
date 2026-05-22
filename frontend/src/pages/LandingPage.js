import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="landingBody">

      <div className="logo">
        <Link to="/">Expense Tracker <i className="fa-solid fa-wallet"></i></Link>
      </div>

      <div className='LandingContent'>
        <h1>Manage your money</h1>
        <h1>with <span>Confidence</span></h1>
        
        <div className='LandingButton'>
            <h3>Start Tracking</h3>
            <Link to="/signup">Signup now</Link>
            {/* <Link to="/login">Login</Link> */}
        </div>
      </div>

    </div>
  )
}

export default LandingPage