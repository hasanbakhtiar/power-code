const initialState = [];

export const shopReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return action.products
            
    
    
        default:
            return state;
    }
}