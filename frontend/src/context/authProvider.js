import {useState,useEffect } from "react";
import AuthContext from "./authContext";
import { verifyAPI } from "../services/authServices";

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);

    const [loading,setLoading]= useState(true);

    useEffect(() => {
        const verifyUser = async () => {
        try {
            
            const result = await verifyAPI();
            
            setUser(result.user)
            } catch (error) {
                if (error.response?.status !== 401) {
                    console.log(error);
                }
                setUser(null);
            }
            finally{
                setLoading(false);
            }
        };
        verifyUser();
        }, []);
    
    return(
        <AuthContext.Provider value={{
            user,setUser,loading,setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}