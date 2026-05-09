import React from 'react'
import './Homepage.css'

import { useState } from 'react';
import Balanceinfo from '../components/Balanceinfo';
import TransactionList from '../components/TransactionList';

function Homepage() {

  const [inputNum, setInputNum] = useState("");
  const [inputNum2, setInputNum2] = useState("");
  const [transactions,setTransactions] = useState([]);

  const addTransaction=(type,amount)=>{
    const newTransaction={
      type,
      amount : Number(amount)
    };
    setTransactions((prev)=>[...prev, newTransaction]);
    setInputNum("");
    setInputNum2("");
  }

  return (
    <div className='Homepage'>
      <Balanceinfo transactions={transactions}/>

      <div className='editinfo'>
        <div className='box'>
          <h2 className='title'>Income <i class="fa-solid fa-arrow-trend-up"></i></h2>
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum}
          onChange={(e) => setInputNum(e.target.value)}
          placeholder="Enter amount"
          />
          <button className='buttonIncome' onClick={()=>{addTransaction("Income",inputNum)}}>Add Income</button>
        </div>

        <div className='box'>
          <h2 className='title'>Expenses <i class="fa-solid fa-arrow-trend-down"></i></h2>
          <input className='inputbox'
          type="number"
          step="any"
          value={inputNum2}
          onChange={(e) => setInputNum2(e.target.value)}
          placeholder="Enter amount"
          />
          <button className='buttonExpense' onClick={()=>{addTransaction("Expense",inputNum2)}}>Add Expense</button>
        </div>
      </div>


      <TransactionList transactions={transactions}/>

    </div>
  )
}

export default Homepage;