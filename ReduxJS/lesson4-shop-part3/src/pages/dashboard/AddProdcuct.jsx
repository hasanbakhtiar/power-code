import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const AddProdcuct = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
    return (
    <div>
      <h1 className='text-center my-5'>Add product</h1>
      <ProductForm sendForm={fd=>{
        dispatch(addProduct(fd));
        navigate("/dashboard");
        swal("Product added","","success");
      }} />
    </div>
  )
}

export default AddProdcuct