import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import useTransaction from '../hooks/useTransaction'
import TransactionContext from '../context/transactionContext';
import '../styles/TransactionPage.css'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function TransactionPage() {
  const navigate = useNavigate();
  const {transactions} =useContext(TransactionContext);
  const {deleteTransaction}= useTransaction();
  return (
    <div className="transactionBody">
      <Navbar/>

      <div className="transactionMain content">
        {transactions.length === 0 ? (
            <div>No Transactions</div>
          ) : (
        <div className="transactionContainer">
          
          <div className="transactionHeader">
            <div>Transaction Date</div>
            <div>Type</div>
            <div>Description</div>
            <div>Amount</div>
            <div>Delete</div>
          </div>

          <div className="transactionContent">

             {[...transactions].map((item) => (
                <div key={item._id} className={`transactionRow ${item.type}`}>
                  <div>
                    {new Date(item.createdAt).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",

                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div>{item.type}</div>
                  <div>{item.description}</div>
                  <div className={`${item.type}Amount`}>₹{item.amount}</div>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTransaction(item._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}

          </div>
          
        </div>
        )}

        <div className="transactionPageButton" onClick={()=>{navigate('/home')}}>
          Back
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default TransactionPage