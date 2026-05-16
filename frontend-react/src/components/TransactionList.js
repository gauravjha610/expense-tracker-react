import React from "react";
import { useState } from "react";
import "../styles/TransactionList.css";

function TransactionList({ transactions, deleteTransaction, messageDelete }) {
  const [showTransaction, setShowTransaction] = useState(false);

  return (
    <div className="transactionBox">
      <button
        className="buttonTransaction"
        onClick={() => {
          setShowTransaction(!showTransaction);
        }}
      >
        {showTransaction ? "Hide" : "Show"} Transactions
      </button>

      {showTransaction && (
        <div className="transactionList">
          {transactions.length === 0 ? (
            <div>No Transactions</div>
          ) : (
            <div>
              <div className="transactionHeader">
                <div>Transaction Date</div>
                <div>Type</div>
                <div>Description</div>
                <div>Amount</div>
                <div>Delete</div>
              </div>

              {messageDelete === "" ? (
                <></>
              ) : (
                <div className="deleteMessage">
                  <p>{messageDelete}</p>
                </div>
              )}

              <div className="transactionBody">
                {[...transactions].reverse().map((item) => (
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
                    <div>₹{item.amount}</div>
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
        </div>
      )}
    </div>
  );
}

export default TransactionList;
