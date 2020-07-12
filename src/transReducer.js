
const TransactionReducer = (state, action) => {
    switch(action.type){
        case "ADD TRANSACTION":
            debugger;
            return [action.Payload, ...state];
        case "Delete TRANSACTION":
            debugger;

            // get index of object with id:37
            var removeIndex = state.map(function(item) { return item.id; }).indexOf(action.Payload.id);
            // remove object
            //state.splice(removeIndex, 1);
            //return state;
            return [...state.slice(0, removeIndex), ...state.slice(removeIndex + 1)];
            default:
                return state;
    }
}


export default TransactionReducer;