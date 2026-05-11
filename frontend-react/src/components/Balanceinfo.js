import React from 'react'
import '../styles/Balanceinfo.css'

function Balanceinfo({transactions , message}) {

    const netBalance = transactions.reduce((total,iterable)=>{
        return iterable.type === 'Income'? total + iterable.amount: total - iterable.amount;
    },0);

  return (
    <div className='balanceinfo'>
      <h2>Total net balance:</h2>
      <h2><i className="fa-solid fa-indian-rupee-sign"></i> {Number.isInteger(netBalance)?netBalance:netBalance.toFixed(2)}</h2>
    </div>
  )
}

export default Balanceinfo;