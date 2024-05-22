import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import shopStore from './tools/store/shopStore'
import { addProduct } from './tools/actions/shopAction';
import { Provider } from 'react-redux';
import supabase from './supabase/clientSupabase';

const store = shopStore();

store.subscribe(()=>{
  console.log(store.getState());
})
const fetchData = async()=>{
  const { data,error } = await supabase.from('products').select()
      if (error) {
        console.log(error);
      }else{
        data.map(item=>(
          store.dispatch(addProduct({id:item.id,img:item.img,title:item.title,desc:item.desc,price:item.price,category:item.category}))

        ))
      }
}
fetchData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
)
