import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, editProduct } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';

const EditProdcuct = () => {
  const dispatch  = useDispatch();
  const {slug} = useParams();
  const data = useSelector(p=>p);
  const filteredData = data.find(p=>slugify(p.title) === slug);
  const navigate  = useNavigate();
  console.log(filteredData);
    return (
    <div>
      <h1 className='text-center my-5'>Add product</h1>
      <ProductForm editdata={filteredData} sendForm={fd=>{
        dispatch(editProduct(filteredData.id,fd))
        navigate('/dashboard');
        swal("Product edited","","success");
      }} />
    </div>
  )
}

export default EditProdcuct