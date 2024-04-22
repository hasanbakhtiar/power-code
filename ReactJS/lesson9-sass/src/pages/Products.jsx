import React from 'react'
import SingleProduct from '../components/SingleProduct'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
const Products = () => {
  const [data] = useContext(ProductContext);
  return (
    <div>
        <h1 className='text-center my-5'>Product List</h1>
        <div className="container">
            <div className="row g-5">
              {data.map(item=>(

                <SingleProduct key={item.id} alldata={item}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Products