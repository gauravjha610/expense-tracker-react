import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">

      <div className="navLogo">
        <Link to='/'>Expense Tracker <i className="fa-solid fa-wallet"></i></Link>
      </div>

      <div className="navLinks">
        <Link>Home</Link>
        <Link>Transactions</Link>
      </div>

      <div className="navProfile">
        {/* <Link>$12345</Link> */}
        <Link><i className="fa-solid fa-user"></i> Gaurav</Link>
      </div>

      
    </div>
  )
}

export default Navbar;