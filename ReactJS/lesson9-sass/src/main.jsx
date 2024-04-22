import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/style.css';
import App from './App'
import { ProductProvider } from './context/ProductContext';
import { TargetEmailProvider } from './context/TargetEmailContext';
import './sass/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <TargetEmailProvider>
        <App />
      </TargetEmailProvider>
    </ProductProvider>
  </React.StrictMode>,
)
