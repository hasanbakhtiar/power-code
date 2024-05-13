import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'


const initialState = {
  count:0
}
const store = createStore((state=initialState,action)=>{
                switch (action.type) {
                  case "increment":
                    return {count:state.count+(action.payload?action.payload:1)}
                    case "decrement":
                    return {count:state.count-1}
                    
                
                  default:
                    return state
                }
});

store.subscribe(()=>{
  console.log(store.getState());
})



store.dispatch({
  type:"decrement",
})


store.dispatch({
  type:"increment",
  payload:13
})





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
