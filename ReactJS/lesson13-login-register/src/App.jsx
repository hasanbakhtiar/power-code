import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { useContext } from 'react';
import { ModeContext } from './context/ModeContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:slug" element={<ProductDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}


const App = () => {
  const [mode] = useContext(ModeContext);
  return (
    <BrowserRouter>
      <div className={mode}>
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App