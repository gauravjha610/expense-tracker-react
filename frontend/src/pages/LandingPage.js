import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function LandingPage() {
  return (
    <div className="page">
      <Navbar/>
    <div className="landingBody content">

      <div className='LandingContent'>
        <h1>Manage your money</h1>
        <h1>with <span>Confidence</span></h1>
        
        <div className='LandingButton'>
            <h3>Start Tracking</h3>
            <Link to="/signup">Get started</Link>
        </div>
      </div>

    </div>

    <Footer/>
    </div>
  )
}

export default LandingPage