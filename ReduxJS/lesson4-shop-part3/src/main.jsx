import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import shopStore from './tools/store/shopStore'
import { addProduct } from './tools/actions/shopAction';
import { Provider } from 'react-redux';
import { supabase } from './supabase/clientSupabase';

const store = shopStore();

store.subscribe(()=>{
  console.log(store.getState());
})
const fetchData = async()=>{
  const { data,error } = await supabase.from('products').select()
      if (error) {
        console.log(error);
      }else{
        console.log(data);
      }
}
fetchData();
// store.dispatch(addProduct({img:"https://mandbwatches.com/wp-content/uploads/2018/09/IMG_5995-2.jpg",title:"Rolex",desc:"classic watch",price:"10000",category:"watch"}));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
)
