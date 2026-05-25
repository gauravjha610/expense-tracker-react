import React, { useContext } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';
import useAuth from '../hooks/useAuth.js'

function Navbar() {
  const {user} =useContext(AuthContext);
  const {logout} =useAuth();

  return (
    <div className="navbar">

      <div className="navLogo">
        <Link to='/'>Expense Tracker <i className="fa-solid fa-wallet"></i></Link>
      </div>

      { user && 
      <div className="navLinks">
        <Link to='/home'>Home</Link>
        <Link to='/transactions'>Transactions</Link>
      </div>
      }

      { user && 
      <div className="navProfile">
        
        <div className='navProfileName'>Hi, {user.name} <i className="fa-solid fa-user"></i></div>
        

        <div className='profileDropdownContainer'>
          <Link to='/profile' className="profileDropdownItem">Profile</Link>
          <div className="profileDropdownItem" onClick={logout}>Logout</div>
        </div>
      </div>
      }
      
    </div>
  )
}

export default Navbar;