const initialState = [];

export const shopReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state,action.product]
            
        case "DELETE_PRODUCT":
            return state.filter(p=>{
                return p.id !== action.id
            })
        case "UPDATE_PRODUCT":
            return state.map(item=>{
                if (item.id === action.id) {
                    return {...item,...action.update}
                }else{
                    return item
                }
            })
        default:
            return state;
    }
}