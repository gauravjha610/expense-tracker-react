import React, { useContext, useState } from 'react'
import '../styles/BalanceCard.css'
import TransactionContext from '../context/transactionContext';

function BalanceCard() {

  const {transactions} = useContext(TransactionContext);
  const [showDropdown,setShowDropdown]=useState(false);

  const summary = transactions.reduce((acc, { type, amount }) => {
    if (type === "Income") {
      acc.income += amount;
      acc.total += amount;
    } else if (type === "Expense") {
      acc.expense += amount;
      acc.total -= amount;
    }
    return acc;
  }, { income: 0, expense: 0, total: 0 });

  return (
    <div className="balanceBody">
    <div className='balanceCard'>

      <div className="balanceContentBody">
        <div className="balanceContent">

          <div className="balanceLogo">
            <i className="fa-solid fa-building-columns"></i>
          </div>

          <div className="netBalance">
            <h2>Total Balance</h2>
            <h2><i className="fa-solid fa-indian-rupee-sign"></i> {summary.total}</h2>
          </div>

        </div>

        {
          showDropdown && (
              <div className="balanceContent">
                
                <div className="balanceLogo">
                  <i className="fa-solid fa-sack-dollar"></i>
                </div>

                <div className="netBalance">
                  <h2>Total Income</h2>
                  <h2><i className="fa-solid fa-indian-rupee-sign"></i> {summary.income}</h2>
                </div>
              </div>
        )}
        { showDropdown && (
            <div className="balanceContent">
              
              <div className="balanceLogo">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>

              <div className="netBalance">
                <h2>Total Expense</h2>
                <h2><i className="fa-solid fa-indian-rupee-sign"></i> {summary.expense}</h2>
              </div>
            </div>
        )}

                  
      </div>


      <div className="balanceButtonBody">

        {showDropdown?
          <div className="dropdownButton"  onClick={()=>{setShowDropdown(!showDropdown)}}>
            <i className="fa-solid fa-angle-up"></i>
          </div>
          :
          <div className="dropdownButton"  onClick={()=>{setShowDropdown(!showDropdown)}}>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        }

      </div>

      
    </div>

    </div>
  )
}

export default BalanceCard;