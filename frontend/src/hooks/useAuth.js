import { signupAPI } from '../services/authServices.js';
import {validateName,validateEmail,validatePassword} from '../utils/validators.js'

export const signup=async(name,email,password)=>{

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
    const newUser ={
        name:name,
        email:email,
        password:password
    };
    try {
        const data = await signupAPI(newUser);
        return({
            success:true,
            data:data
        });
    } catch (error) {
        return({
            success:false,
            apiError: error.response?.data?.message || "Something went wrong"
        })
    }
}