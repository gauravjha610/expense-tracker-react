import React from 'react'
import './Balanceinfo.css'

function Balanceinfo({transactions}) {

    const netBalance = transactions.reduce((total,iterable)=>{
        return iterable.type === 'Income'? total + iterable.amount: total - iterable.amount;
    },0);

  return (
    <div className='balanceinfo'>
        <h2>Total net balance: <i class="fa-solid fa-indian-rupee-sign"></i> {Number.isInteger(netBalance)?netBalance:netBalance.toFixed(2)}</h2>
    </div>
  )
}

export default Balanceinfo;