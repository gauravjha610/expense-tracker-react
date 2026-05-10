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
          {transactions.length === 0? 
              <div>No Transactions</div> :
            <div>
              <div className='transactionHeader'>
                <div>Type</div>
                <div>Description</div>
                <div>Amount</div>
                <div>Delete</div>
              </div>
              {
              [...transactions].reverse().map((item, index) => (
                <div key={index} className={`transactionRow ${item.type}`}>
                <div>{item.type}</div>
                <div>{item.desc}</div>
                <div>₹{item.amount}</div>
                <button className='deleteButton'><i class="fa-solid fa-trash"></i></button>
                </div>
              ))}
            </div>
          }         
        </div>
        )}
    </div>
  )
}

export default TransactionList;