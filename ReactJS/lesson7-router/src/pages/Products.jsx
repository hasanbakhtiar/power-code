import React from 'react'
import SingleProduct from '../components/SingleProduct'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
const Products = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res=>setData(res.data.products))
  },[])
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