import React from 'react'
import '../styles/Homepage.css'

import { useState,useEffect } from 'react';
import Balanceinfo from '../components/Balanceinfo';
import TransactionList from '../components/TransactionList';

function Homepage() {

  const [inputNum, setInputNum] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDescription2, setInputDescription2] = useState("");
  const [inputNum2, setInputNum2] = useState("");

  const [messageIncome, setMessageIncome] = useState("");
  const [messageExpense, setMessageExpense] = useState("");
  const [messageDelete, setMessageDelete] = useState("");

  const [transactions,setTransactions] = useState([]);

  useEffect(() => {
  localStorage.setItem("myTransactions",JSON.stringify(transactions));
}, [transactions]);

  useEffect(()=>{
    getTransactions();
  },[]);

  const getTransactions = async()=>{
    try {
      const response = await fetch("http://localhost:4000/api/transactions/");
      const data = await response.json();
      setTransactions(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const addTransaction=async(type,description,amount)=>{
    try {
    if(description.trim() === ""){
      if(type === 'Income'){
        setMessageIncome("Please enter valid description");
        setTimeout(() => {
        setMessageIncome("");
      }, 5000);
      }
      else{
        setMessageExpense("Please enter valid description");
        setTimeout(() => {
        setMessageExpense("");
      }, 5000);
      }

      return;
    }
    if(Number(amount) === 0){
      if(type === 'Income'){
        setMessageIncome("Please enter valid amount");
        setTimeout(() => {
        setMessageIncome("");
      }, 5000);
      }
      else{
        setMessageExpense("Please enter valid amount");
        setTimeout(() => {
        setMessageExpense("");
      }, 5000);
      }

      return;
    }
    const newTransaction={
      type,
      description,
      amount : Number(amount)
    };

    const response = await fetch("http://localhost:4000/api/transactions/",{
      method : "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    });

    console.log(response.json())
    getTransactions();
    setInputNum("");
    setInputNum2("");
    setInputDescription("");
    setInputDescription2("");
    
    if(type === 'Income'){
        setMessageIncome("Income added successfully");
        setTimeout(() => {
        setMessageIncome("");
      }, 5000);
      }
      else{
        setMessageExpense("Expense deducted successfully");
        setTimeout(() => {
        setMessageExpense("");
      }, 5000);
      }
    } catch (error) {
      console.log({message:error.message});
    }

  }

  const deleteTransaction=async(id)=>{
    try {
      const response = await fetch(`http://localhost:4000/api/transactions/${id}`,{
        method : "DELETE"
      });
      console.log(response.json());
      getTransactions();
      setMessageDelete('Transaction deleted successfully');
      setTimeout(() => {
        setMessageDelete("");
      }, 5000);
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className='Homepage'>
      <Balanceinfo transactions={transactions}/>

      <div className='editinfo'>
        <div className='box'>
          <h2 className='title'>Income <i className="fa-solid fa-arrow-trend-up"></i></h2>
          <input className='inputbox'
          type="text"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Enter description"
          />
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum}
          onChange={(e) => setInputNum(e.target.value)}
          placeholder="Enter amount"
          />
          {messageIncome === ''?<></>:<p>{messageIncome}</p>}
          <button className='buttonIncome' onClick={()=>{addTransaction("Income",inputDescription,inputNum)}}>Add Income</button>
        </div>

        <div className='box'>
          <h2 className='title'>Expenses <i className="fa-solid fa-arrow-trend-down"></i></h2>
          <input className='inputbox'
          type="text"
          value={inputDescription2}
          onChange={(e) => setInputDescription2(e.target.value)}
          placeholder="Enter description"
          />
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum2}
          onChange={(e) => setInputNum2(e.target.value)}
          placeholder="Enter amount"
          />
          {messageExpense === ''?<></>:<p>{messageExpense}</p>}
          
          <button className='buttonExpense' onClick={()=>{addTransaction("Expense",inputDescription2,inputNum2)}}>Add Expense</button>
        </div>
      </div>


      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} messageDelete={messageDelete}/>

    </div>
  )
}

export default Homepage;