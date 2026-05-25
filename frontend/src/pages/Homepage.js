import React, { useContext } from 'react'
import '../styles/Homepage.css'
import BalanceCard from '../components/BalanceCard';
import Navbar from '../components/Navbar';
import IncomeCard from '../components/IncomeCard';
import ExpenseCard from '../components/ExpenseCard';
import TransactionContext from '../context/transactionContext';
import Footer from '../components/Footer';

function Homepage() {
  const {transactions} = useContext(TransactionContext);

  return (
    <div className="page">
      <Navbar/>
      
      <div className="Homepage content">
        <BalanceCard transactions={transactions}/>
        <div className='cardSection'>
          <IncomeCard/>
          <ExpenseCard/>
        </div>
      </div>


    <Footer/>
    </div>
  )
}

export default Homepage;