import { signupAPI,logoutAPI, loginAPI } from '../services/authServices.js';
import {validateName,validateEmail,validatePassword,validateLoginPassword} from '../utils/validators.js'
import { useContext } from 'react';
import AuthContext from '../context/authContext.js';
import { useNavigate } from 'react-router-dom';

const useAuth=()=>{

    const {user,setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const signup=async(name,email,password)=>{
        //Validation
        const error = {
        name:validateName(name) || "",
        email:validateEmail(email) || "",
        password:validatePassword(password) || ""
        }
        if(error.name || error.email || error.password){
            return({
                success:false,
                error
            });
        }

        //API
        try {
            const newUser ={
                name:name,
                email:email,
                password:password
            };
            const result = await signupAPI(newUser);
            return(result);
        } catch (error) {
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }
    }
    const login=async(email,password)=>{
        //Validation
        const error = {
        email:validateEmail(email) || "",
        password:validateLoginPassword(password) || ""
        }
        if( error.email || error.password){
            return({
                success:false,
                error
            });
        }

        //API
        try {
            const userData ={
                email:email,
                password:password
            };
            const result = await loginAPI(userData);
            return(result);
        } catch (error) {
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }
    }

    const logout=async()=>{
        if(!user) return;
        try {
            await logoutAPI();
            setUser(null);
            navigate('/login');
        
        } catch (error) {
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }
    }

    return({
        signup,
        login,
        logout
    })

}

export default useAuth;