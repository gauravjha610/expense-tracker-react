import React, { useContext, useState } from 'react'
import '../styles/SignupPage.css'
import { Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import AuthContext from '../context/authContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignupPage() {

  const navigate = useNavigate();

  const {signup} = useAuth();

  const {setUser} = useContext(AuthContext);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState({name:"",email:"",password:""});
  const [apiError,setApiError]= useState("");

  const [loading,setLoading] =useState(false);

  const handleSignup = async(e) =>{
    e.preventDefault();
    setLoading(true);
    setError({name:"",email:"",password:""});
    setApiError("");
    const result= await signup(name,email,password);
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
    <div className="signupBody content">

      <form className='signupContainer' onSubmit={handleSignup}>

        <h1>Signup Page</h1>
        
        <div className={error.name?"errorInput":""}>
        <input
        type="text" 
        name="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
        />
        { error.name && <p>{error.name}*</p>}
        </div>
        
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
          {loading? "Loading...": "Signup"}
        </button>
        
        <h3>Already a user? <Link to="/login">Login</Link></h3>

      </form>

    </div>

    <Footer/>
    </div>
  )
}

export default SignupPage