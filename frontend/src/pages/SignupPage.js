import React, { useState } from 'react'
import '../styles/SignupPage.css'
import { Link, useNavigate} from 'react-router-dom'
import { signup } from '../hooks/useAuth';

function SignupPage() {

  const navigate=useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState({name:"",email:"",password:""});
  const [apiError,setApiError]= useState("");

  const handleSignup = async(e) =>{

    setError({name:"",email:"",password:""});
    setApiError("");

    e.preventDefault();
    const result= await signup(name,email,password);
    if(!result.success){
      if(result.error){
        setError(result.error);
      }
      if(result.apiError){
        setApiError(result.apiError);
      }

      return;
    }

    //after Success
    navigate('/home');

  }
  return (
    <div className="signupBody">

      <div className="logo">
        <Link to='/'>Expense Tracker <i className="fa-solid fa-wallet"></i></Link>
      </div>

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
        <button type="submit">Sign up</button>
        
        <h3>Already a user? <Link to="/login">Login</Link></h3>

      </form>

    </div>
  )
}

export default SignupPage