import api from '../api/axios.js'

export const verifyAPI= async()=>{
    try {
        const response=await api.get('/auth/verify-me');
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const signupAPI= async(user)=>{
    const response=await api.post('/auth/signup',user);
    console.log(response.data);
    return response.data;
}
export const loginAPI= async(user)=>{
    const response=await api.post('/auth/login',user);
    console.log(response.data);
    return response.data;
}
export const logoutAPI= async(user)=>{
    const response=await api.post('/auth/logout');
    return response.data;
}