import { useState } from 'react';
import 
{   getTransactionsAPI,
    addTransactionAPI,
    deleteTransactionAPI
} from '../services/transactionServices.js'

const useTransaction= ()=>{

    const [transactions,setTransactions]= useState([]);

    const getTransactions = async()=>{
        try {
            
            const data =await getTransactionsAPI();
            setTransactions(data);

            return({
                success: true
            })

        } catch (error) {
            const message= error.response?.data?.message || "Something went wrong";
            
            return({
                success:false,
                message:message
            })
        }
    }

    const addTransaction=async(transactionData)=>{
        try {
            await addTransactionAPI(transactionData);
            await getTransactions();

            return({
                success : true
            })
        
        } catch (error) {
            const message= error.response?.data?.message || "Something went wrong";

            return({
                success: false,
                message:message
            })
        }

    }

  const deleteTransaction=async(id)=>{
    try {
        await deleteTransactionAPI(id);
        getTransactions();

        return({
            success : true
        });

    } catch (error) {
        const message= error.response?.data?.message || "Something went wrong";

        return({
            success: false,
            message:message
        })
    }
  }

  return(
    {
        getTransactions,
        addTransaction,
        deleteTransaction,
        transactions
    }
  )
}

export default useTransaction;