import React from 'react'
import './Homepage.css'

import { useState,useEffect } from 'react';
import Balanceinfo from '../components/Balanceinfo';
import TransactionList from '../components/TransactionList';

function Homepage() {

  const [inputNum, setInputNum] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDesc2, setInputDesc2] = useState("");
  const [inputNum2, setInputNum2] = useState("");

  const [messageIncome, setMessageIncome] = useState("");
  const [messageExpense, setMessageExpense] = useState("");
  const [messageDelete, setMessageDelete] = useState("");

  const [transactions,setTransactions] = useState(()=>{
    const savedTransactions = localStorage.getItem("myTransactions");
    return savedTransactions? JSON.parse(savedTransactions):[] ;
  });

  useEffect(() => {
  localStorage.setItem("myTransactions",JSON.stringify(transactions));
}, [transactions]);

  const addTransaction=(type,desc,amount)=>{
    if(desc.trim() === ""){
      if(type === 'Income'){
        setMessageIncome("Please enter valid desciption");
        setTimeout(() => {
        setMessageIncome("");
      }, 5000);
      }
      else{
        setMessageExpense("Please enter valid desciption");
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
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      type,
      desc,
      amount : Number(amount)
    };
    setTransactions((prev)=>[...prev, newTransaction]);
    setInputNum("");
    setInputNum2("");
    setInputDesc("");
    setInputDesc2("");
    
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

  }

  const deleteTransaction=(id)=>{
    const updatedTransactions=transactions.filter((item)=> item.id !== id);
    setTransactions(updatedTransactions);
    setMessageDelete('Transaction deleted successfully');
    setTimeout(() => {
      setMessageDelete("");
    }, 5000);
  }


  return (
    <div className='Homepage'>
      <Balanceinfo transactions={transactions}/>

      <div className='editinfo'>
        <div className='box'>
          <h2 className='title'>Income <i className="fa-solid fa-arrow-trend-up"></i></h2>
          <input className='inputbox'
          type="text"
          value={inputDesc}
          onChange={(e) => setInputDesc(e.target.value)}
          placeholder="Enter Description"
          />
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum}
          onChange={(e) => setInputNum(e.target.value)}
          placeholder="Enter amount"
          />
          {messageIncome === ''?<></>:<p>{messageIncome}</p>}
          <button className='buttonIncome' onClick={()=>{addTransaction("Income",inputDesc,inputNum)}}>Add Income</button>
        </div>

        <div className='box'>
          <h2 className='title'>Expenses <i className="fa-solid fa-arrow-trend-down"></i></h2>
          <input className='inputbox'
          type="text"
          value={inputDesc2}
          onChange={(e) => setInputDesc2(e.target.value)}
          placeholder="Enter Description"
          />
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum2}
          onChange={(e) => setInputNum2(e.target.value)}
          placeholder="Enter amount"
          />
          {messageExpense === ''?<></>:<p>{messageExpense}</p>}
          
          <button className='buttonExpense' onClick={()=>{addTransaction("Expense",inputDesc2,inputNum2)}}>Add Expense</button>
        </div>
      </div>


      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} messageDelete={messageDelete}/>

    </div>
  )
}

export default Homepage;