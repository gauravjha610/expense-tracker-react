import React, { useState } from 'react'
import '../styles/BalanceCard.css'

function Balanceinfo({transactions , message}) {


  const [showDropdown,setShowDropdown]=useState(false);

  const netBalance = transactions.reduce((total,iterable)=>{
      return iterable.type === 'Income'? total + iterable.amount: total - iterable.amount;
  },0);

  return (
    <div className='balanceCard'>

      <div className="balanceContent">

        <div className="balanceLogo">
          <i className="fa-solid fa-building-columns"></i>
        </div>

        <div className="netBalance">
          <h2>Total Balance</h2>
          <h2><i className="fa-solid fa-indian-rupee-sign"></i> {Number.isInteger(netBalance)?netBalance:netBalance.toFixed(2)}</h2>
        </div>

      </div>

      {
        !showDropdown && (
          <div className="dropdownButton" onClick={()=>{setShowDropdown(!showDropdown)}}>
            <i className="fa-solid fa-angle-down" ></i>
          </div>
        )
      }

      {
        showDropdown && (
          <div className="balanceDropdown">
            <div className="dropdownItem">
              
              <div className="balanceLogo">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>

              <div className="netBalance">
                <h2>Total Income</h2>
                <h2><i className="fa-solid fa-indian-rupee-sign"></i> {Number.isInteger(netBalance)?netBalance:netBalance.toFixed(2)}</h2>
              </div>
            </div>

            <div className="dropdownItem">
              
              <div className="balanceLogo">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>

              <div className="netBalance">
                <h2>Total Expense</h2>
                <h2><i className="fa-solid fa-indian-rupee-sign"></i> 123456</h2>
              </div>
            </div>

            <div className="dropdownButton"  onClick={()=>{setShowDropdown(!showDropdown)}}>
              <i className="fa-solid fa-angle-up"></i>
            </div>
               
          </div>

        )
      }
      
    </div>
  )
}

export default Balanceinfo;