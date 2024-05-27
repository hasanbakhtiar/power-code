import { applyMiddleware, createStore } from "redux";
import { shopReducer } from "../reducers/shopReducer";
import { thunk } from "redux-thunk";

const shopStore = ()=>{
    const store  = createStore(shopReducer,applyMiddleware(thunk));
    return store;
}

export default shopStore;