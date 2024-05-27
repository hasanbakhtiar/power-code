import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import {  addProductToDatabase } from '../../tools/actions/shopAction';
import swal from 'sweetalert';

const AddProdcuct = () => {
  const dispatch  = useDispatch();
    return (
    <div>
      <h1 className='text-center my-5'>Add product</h1>
      <ProductForm sendForm={(fd)=>{
        dispatch(addProductToDatabase(fd));
        swal("Product added","","success");
      }} />
    </div>
  )
}

export default AddProdcuct