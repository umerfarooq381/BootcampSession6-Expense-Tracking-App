import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transReducer';
const uuidv4 = require("uuid/v4");


const initialTransacations = [
    {id:uuidv4(), amount:500, desc:"Cash"},
    {id:uuidv4(), amount:-50, desc:"drink"},
    {id:uuidv4(), amount:100, desc:"deposit"}
]

export const TransactionContext = createContext(initialTransacations);




export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransacations);

        function addTransaction(type_message,transObj){
            dispatch({
                type:type_message,
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