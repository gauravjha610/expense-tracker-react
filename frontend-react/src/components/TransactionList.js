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
            <div>{item.type}</div>
            <div>₹{item.amount}</div>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default TransactionList;