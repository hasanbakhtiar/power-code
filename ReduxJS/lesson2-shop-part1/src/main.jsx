import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import shopStore from './tools/store/shopStore'
import { addProduct } from './tools/actions/shopAction';

const store = shopStore();

store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addProduct({mytitle:"a",mydesc:"",myprice:"",mycategory:""}));
store.dispatch(addProduct({mytitle:"b",mydesc:"",myprice:"",mycategory:""}));
store.dispatch(addProduct({mytitle:"c",mydesc:"",myprice:"",mycategory:""}));
store.dispatch(addProduct({mytitle:"d",mydesc:"",myprice:"",mycategory:""}));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
