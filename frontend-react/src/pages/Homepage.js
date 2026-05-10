import React from 'react'
import './Homepage.css'

import { useState } from 'react';
import Balanceinfo from '../components/Balanceinfo';
import TransactionList from '../components/TransactionList';

function Homepage() {

  const [inputNum, setInputNum] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDesc2, setInputDesc2] = useState("");
  const [inputNum2, setInputNum2] = useState("");
  const [transactions,setTransactions] = useState([]);

  const addTransaction=(type,desc,amount)=>{
    const newTransaction={
      type,
      desc,
      amount : Number(amount)
    };
    setTransactions((prev)=>[...prev, newTransaction]);
    setInputNum("");
    setInputNum2("");
    setInputDesc("");
    setInputDesc2("");
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
          <button className='buttonExpense' onClick={()=>{addTransaction("Expense",inputDesc2,inputNum2)}}>Add Expense</button>
        </div>
      </div>


      <TransactionList transactions={transactions}/>

    </div>
  )
}

export default Homepage;