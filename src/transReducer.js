
const TransactionReducer = (state, action) => {
    switch(action.type){
        case "ADD TRANSACTION":
            debugger;
            return [action.Payload, ...state];
            default:
                return state;
    }
}


export default TransactionReducer;