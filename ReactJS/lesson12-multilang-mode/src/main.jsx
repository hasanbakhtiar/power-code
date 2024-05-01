import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ProductProvider } from './context/ProductContext';
import './sass/style.scss';
import { CartProvider } from 'react-use-cart';
import { LangProvider } from './context/LangContext';
import { ModeProvider } from './context/ModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeProvider>
      <LangProvider>
        <CartProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CartProvider>
      </LangProvider>
    </ModeProvider>
  </React.StrictMode>,
)
