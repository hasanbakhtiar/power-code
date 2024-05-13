const initialState = [];

export const shopReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state,action.product]
            
    
        default:
            return state;
    }
}