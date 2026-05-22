import axios from "axios"

const API_URL=""

export const signupAPI= async(user)=>{
    const response=await axios.post(API_URL,user);
    return response.data;
}
export const loginAPI= async(user)=>{
    const response=await axios.post(API_URL,user);
    return response.data;
}