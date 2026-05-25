import { useContext } from 'react';
import { addTransactionAPI,deleteTransactionAPI} from '../services/transactionServices.js'
import { validateAmount, validateDescription } from '../utils/validators.js';
import TransactionContext from '../context/transactionContext.js';

const useTransaction= ()=>{

    const {transactions,getTransactions}= useContext(TransactionContext);


    const addTransaction=async({type,description,amount})=>{
        const error = {
            description:validateDescription(description) || "",
            amount:validateAmount(amount) || ""
        }
        if(error.description || error.amount){
            return({
                success:false,
                error
            });
        }

        try {
            const newTransaction = {
                type:type,
                description:description,
                amount:amount
            }
            const result = await addTransactionAPI(newTransaction);
            await getTransactions();
            return(result);
        
        } catch (error) {
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }

    }

  const deleteTransaction=async(id)=>{
    try {
        const result = await deleteTransactionAPI(id);
        await getTransactions();
        return(result);

    } catch (error) {
            return({
                success:false,
                apiError: error.response?.data?.message || "Something went wrong"
            });
        }
  }

  return(
    {
        addTransaction,
        deleteTransaction,
        transactions
    }
  )
}

export default useTransaction;