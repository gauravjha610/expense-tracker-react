import { useContext, useEffect, useState } from "react";
import TransactionContext from "./transactionContext";
import { getTransactionsAPI } from "../services/transactionServices";
import AuthContext from "./authContext";


export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const {user} = useContext(AuthContext);
    const getTransactions = async()=>{
        try {
            const result =await getTransactionsAPI();
            if(result.success){
                setTransactions(result.transactions);
            }
            return(result);
        } catch (error) {
            console.log(error);
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }
    };

    useEffect(()=>{
        if(user){
            getTransactions();
            console.log("Loading transactions at start");
        }
    },[user]);

    return (
        <TransactionContext.Provider value={{
        transactions,
        setTransactions,
        getTransactions
        }}>
        {children}
        </TransactionContext.Provider>
    );
};