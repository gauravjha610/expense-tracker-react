import React, { useState } from 'react'
import '../styles/IncomeAndExpenseCard.css'
import useTransaction from '../hooks/useTransaction';
import {validateTransaction} from '../utils/validators.js'

function IncomeCard() {

    const {addTransaction} = useTransaction();

    const [amount,setAmount] = useState("");
    const [description,setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    const [apiErrorMessage, setApiErrorMessage] = useState("");
    const [successMessage,setSuccessMessage] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();

        setApiErrorMessage("");
        setSuccessMessage("");
        setErrorMessage({});
        
        const validateErrors = validateTransaction({
        description,
        amount
        });

        if(Object.keys(validateErrors).length > 0){
            setErrorMessage(validateErrors);
            return;
        }
        setErrorMessage({});

        const response = await addTransaction({
            type:'Income',
            description,
            amount
        });

        if(response.success){
            setAmount("");
            setDescription("");
            setSuccessMessage("Income Added Successfully");
        }
        else{
            console.log("api error msg");
            setApiErrorMessage(response.message);
        }

    }

  return (
    <form className="cardBody" onSubmit={handleSubmit}>

        <h1>
            Income <i className="fa-solid fa-arrow-trend-up"></i>
        </h1>

        <div className={errorMessage.description?"inputBox errorInput":"inputBox"}>
        <input 
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        />
        {
                errorMessage.description && (
                    <div className='errorMessage'>{errorMessage.description}</div>
                )
            }
        </div>

        <div className={errorMessage.amount? "inputBox errorInput":"inputBox"}>

            <input className={errorMessage.amount? "inputBox errorInput":"inputBox"}
            type="number"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            />

            {
                errorMessage.amount && (
                    <div className='errorMessage'>{errorMessage.amount}</div>
                )
            }

        </div>

        <div className='buttonBox'>

        {successMessage && <p className='successMessage'>{successMessage}</p>}

        <button className='buttonIncome' type='submit'>
            Add Income
        </button>

        {apiErrorMessage && <p className='errors'>{apiErrorMessage}</p>}
        </div>
    
    </form>
  )
}

export default IncomeCard;