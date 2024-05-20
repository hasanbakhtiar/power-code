import { createStore } from "redux";
import { shopReducer } from "../reducers/shopReducer";

const shopStore = ()=>{
    const store  = createStore(shopReducer);
    return store;
}

export default shopStore;