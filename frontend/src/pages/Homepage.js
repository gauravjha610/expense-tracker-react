import React from 'react'
import '../styles/Homepage.css'
import Balanceinfo from '../components/BalanceCard';
import Navbar from '../components/Navbar';
import IncomeCard from '../components/IncomeCard';
import ExpenseCard from '../components/ExpenseCard';
import useTransaction from '../hooks/useTransaction';

function Homepage() {

  const {transactions}=useTransaction();

  return (
    <div className='Homepage'>
      <Navbar/>
      <Balanceinfo transactions={transactions}/>

      <div className='cardSection'>
        <IncomeCard/>

        <ExpenseCard/>
      </div>


      {/* <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} messageDelete={messageDelete}/> */}

    </div>
  )
}

export default Homepage;