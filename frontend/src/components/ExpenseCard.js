import React from 'react'
import { useState } from 'react';
import useTransaction from '../hooks/useTransaction';
import '../styles/IncomeAndExpenseCard.css'

function ExpenseCard() {

    const {addTransaction} = useTransaction();

    const [amount,setAmount] = useState("");
    const [description,setDescription] = useState("");
    const [error,setError] = useState({description:"",amount:""});
    const [apiError,setApiError]= useState("");
    const [successMessage,setSuccessMessage] = useState("");

    const [loading,setLoading] =useState(false);

    const handleSubmit =async(e)=>{
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setError({description:"",amount:""});
        setApiError("");
        const type='Expense';
        const result =await addTransaction({type,description,amount});

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

        //after success
        setAmount("");
        setDescription("");
        setSuccessMessage("Expense Added Successfully");
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
        setLoading(false);

    }

  return (
    <form className="cardBody" onSubmit={handleSubmit}>

        <h1 className='title'>
            Expense <i className="fa-solid fa-arrow-trend-down"></i>
        </h1>

        <div className={error.description? "inputBox errorInput":"inputBox"}>
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            />
            {
                error.description && (
                    <div className='errorMessage'>{error.description}*</div>
                )
            }
        </div>

        <div className={error.amount? "inputBox errorInput":"inputBox"}>
            <input
            type="number"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            />

            {
                error.amount && (
                    <div className='errorMessage'>{error.amount}*</div>
                )
            }

        </div>

        <div className='buttonBox'>

        {successMessage && <p className='successMessage'>{successMessage}</p>}

        <button className='buttonIncome' type='submit' disabled={loading}>
            {loading? "Loading...": "Add Expense"}
        </button>

        {apiError && <p className='errors'>{apiError}*</p>}
        </div>
    
    </form>
  )
}

export default ExpenseCard;