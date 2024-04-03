import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';

class List extends React.Component{
  render(){
    return(
      <ol>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </ol>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div className='info container mt-5'>
      <List />  
      <List />  
      <List />  
      </div>
    )
  }
}



ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


