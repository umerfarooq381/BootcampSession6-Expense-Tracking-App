import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';
const uuidv4 = require("uuid/v4");
function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext);

    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);


    const handleAddition =(event) => {
        event.preventDefault()
        if(Number(newAmount) === 0)
            {
                alert("Please enter correct value");
                return false;
            }
            addTransaction("ADD TRANSACTION",{id:uuidv4(),amount:Number(newAmount), desc:newDesc})

            setDesc('');
            setAmount(0);
            
    }
    const deleteRecord1 = (event) => {
        
debugger;
        // for( var i = 0; i < transactions.length; i++)
        // { 
        //     if ( transactions[i].id === event.target.dataset.id) 
        //     { 
        //         //transactions.splice(i, 1); 
        //         // addTransaction([],transactions);
                 addTransaction("Delete TRANSACTION",{id:event.target.dataset.id,amount:0, desc:''})
        //         document.getElementById(transactions[i].id).remove();
        //     }
        // }
        setDesc('');
            setAmount(0);
        
        //  console.log(event.target.dataset.id);
        
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    // handleClick = (event) => {
    //     this.setState({ clicked: Number(event.target.dataset.id) });
    //   }

    
  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker </h1>

      <h3>Your Balance <br />{getIncome() + getExpense()}</h3>

      <div className="expense-container">
      <h3>Income <br />{getIncome()}</h3>
      <h3>Expense <br />{getExpense()}</h3>
      </div>

<h3>History</h3>
<hr />

<ul className="transaction-list">
                {transactions.map((transaction, ind) => {
                    return (
                        <li id={transaction.id} key={ind}>
                            <span>
                                <span> {transaction.desc} </span>
                                <span> {transaction.amount} </span>
                            </span>
                            <span data-id={transaction.id} onClick={deleteRecord1} className="leftelement">
                                X
                            </span>
                        </li>
                    )
                })}
            </ul>

<h3>Add new trasaction</h3>
<hr></hr>
<form className="transaction-form" onSubmit={handleAddition}>
    <label>Enter Description <br />
        <input value={newDesc} type="text" 
        onChange={(ev)=> setDesc(ev.target.value)} 
        placeholder="Enter text..." required/>
    </label>
    <br/>
    <label>
        Amount <br/> (negative -expense, positive - income)<br />
        <input  value={newAmount} type="number" 
        onChange={(ev)=> setAmount(ev.target.value)} 
        placeholder="Enter amount..." required/>
    </label>
    <br/>
    <input type="submit" value="Add Transaction" />
</form>


    </div>
  );
}

export default Child;