import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import '../styles/ProfilePage.css'
import AuthContext from '../context/authContext'
import useAuth from '../hooks/useAuth'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


function Profilepage() {

    const {logout} = useAuth();
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
  return (
    <div className='profilePage page'>
        <Navbar/>
        { user &&
        <div className="profileBody content">
        <div className="profileContainer">
            <div className="profileCard">
                <div className="profileImg">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="profileDetails">
                    <div className="profileName">
                        <h1>Name: <span>{user.name}</span></h1>
                    </div>
                    <div className="profileEmail">
                        <h1>Email: <span>{user.email}</span></h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="profilePageButtons">
            <div className="profileLogoutButton" onClick={()=>{navigate('/home')}}>
                Back
            </div>
            <div className="profileLogoutButton" onClick={logout}>
                Logout
            </div>
        </div>
        </div>
        }

        <Footer/>
    </div>
  )
}

export default Profilepage