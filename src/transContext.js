import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';

const initialTransacations = [
    {amount:500, desc:"Cash"},
    {amount:-50, desc:"drink"},
    {amount:100, desc:"deposit"}
]

export const TransactionContext = createContext(initialTransacations);




export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransacations);

        function addTransaction(transObj){
            debugger;
            dispatch({
                type:"ADD TRANSACTION",
                Payload:transObj
            })
    }

    return (
        <TransactionContext.Provider value ={{
            transactions: state, 
            addTransaction: addTransaction
            }}>
            {children}
        </TransactionContext.Provider>
    )


}