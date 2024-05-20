import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Dashboard from './pages/dashboard/Dashboard'
import AddProdcuct from './pages/dashboard/AddProdcuct'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import EditProdcuct from './pages/dashboard/EditProdcuct'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/add' element={<AddProdcuct />}></Route>
          <Route path='/dashboard/edit/:slug' element={<EditProdcuct />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App