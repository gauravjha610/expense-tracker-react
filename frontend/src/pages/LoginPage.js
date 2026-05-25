import React, { useContext, useState } from 'react'
import '../styles/LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import AuthContext from '../context/authContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage() {

  const navigate = useNavigate();

  const {login} = useAuth();

  const {setUser} = useContext(AuthContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState({email:"",password:""});
  const [apiError,setApiError]= useState("");

  const [loading,setLoading] =useState(false);

  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true);
    setError({email:"",password:""});
    setApiError("");
    const result= await login(email,password);
    console.log(result);
    console.log(result.user);
    if(!result.success){
      if(result.error){
        setError(result.error);
      }
      if(result.apiError){
        setApiError(result.apiError);
      }
      setLoading(false);
      return;
    }

    //after Success
    setUser(result.user);
    setLoading(false);
    navigate('/home');
  }
  return (
    <div className="page">
      <Navbar/>
    <div className="loginBody content">

      <form className='loginContainer' onSubmit={handleLogin}>
        <h1>Login Page</h1>
        <div className={error.email?"errorInput":""}>
        <input 
        type="email" 
        name="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
        />
        { error.email && <p>{error.email}*</p>}
        </div>
        
        <div className={error.password?"errorInput":""}>
        <input 
        type="password" 
        name="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'
        />
        { error.password && <p>{error.password}*</p>}
        </div>

        {apiError && 
        <div className={apiError?"errorInput":""}>
           <p>{apiError}*</p>
        </div>
        }
        <button type="submit" disabled={loading}>
          {loading? "Loading...": "Login"}
        </button>
        <h3>New User? <Link to="/signup">Signup</Link></h3>
      </form>

    </div>

      <Footer/>
    </div>
  )
}

export default LoginPage