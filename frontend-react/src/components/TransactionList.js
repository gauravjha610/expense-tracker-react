import React from 'react'
import { useState } from 'react';
import './TransactionList.css'

function TransactionList({transactions}) {
    const [showTransaction,setShowTransaction]= useState(false);

  return (
    <div className='transactionBox'>
        <button className='buttonTransaction' onClick={()=>{setShowTransaction(!showTransaction)}}>{showTransaction?"Hide":"Show"} Transactions</button>

        {showTransaction && (
        <div className='transactionList'>
        {[...transactions].reverse().map((item, index) => (
            <div key={index} className={`transactionElement ${item.type}`}>
            <h2>{item.type}</h2>
            <h2>₹{item.amount}</h2>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default TransactionList;