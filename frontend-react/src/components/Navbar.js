import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='navTitle'> Expense Tracker App <i className="fa-solid fa-wallet"></i> </h1>
        <h4 className='navSubtitle'>--A simple solution to track your expenses--</h4>
    </div>
  )
}

export default Navbar;