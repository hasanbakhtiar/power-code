import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import shopStore from './tools/store/shopStore'
import {  getProducts } from './tools/actions/shopAction';
import { Provider } from 'react-redux';
import supabase from './supabase/clientSupabase';

const store = shopStore();

store.subscribe(()=>{
  console.log(store.getState());
})
const fetchData = async()=>{
  const { data,error } = await supabase.from('products').select()

  store.dispatch(getProducts(data));}
fetchData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
)
