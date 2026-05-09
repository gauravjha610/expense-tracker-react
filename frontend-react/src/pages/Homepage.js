import React from 'react'
import './Homepage.css'

import { useState } from 'react';

function Homepage() {

  const [inputNum, setInputNum] = useState("");
  const [inputNum2, setInputNum2] = useState("");
  const [netBalance, setNetBalance] = useState(0);

  const [showTransaction,setShowTransaction]= useState(false);


  const [transaction,setTransaction] = useState([]);

  const addTransaction=(type,amount)=>{
    const newTransaction={
      type,
      amount
    };
    setTransaction((prev)=>[...prev, newTransaction]);
  }

  const addAmount = ()=>{
    setNetBalance(netBalance + Number(inputNum));
    setInputNum("");
  }

  const subtractAmount = () => {
    setNetBalance(netBalance - Number(inputNum2));
    setInputNum2("");
  };

  return (
    <div className='Homepage'>

        <div className='balanceinfo'>
          <h2>Total net balance: <i class="fa-solid fa-indian-rupee-sign"></i> {netBalance}</h2>
        </div>

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
            <button className='buttonIncome' onClick={()=>{addAmount();addTransaction("Income",inputNum)}}>Add Income</button>
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
            <button className='buttonExpense' onClick={()=>{subtractAmount();addTransaction("Expense",inputNum2)}}>Add Expense</button>
          </div>
        </div>

        <div className='transactionBox'>
          <button className='buttonTransaction' onClick={()=>{setShowTransaction(!showTransaction)}}>{showTransaction?"Hide":"Show"} Transactions</button>

          {showTransaction && (
            <div className='transactionList'>
            {[...transaction].reverse().map((item, index) => (
              <div key={index} className={`transactionElement ${item.type}`}>
                <h2>{item.type}</h2>
                <h2>₹{item.amount}</h2>
              </div>
              ))}
          </div>
          )}
        </div>

    </div>
  )
}

export default Homepage;