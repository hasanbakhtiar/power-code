import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import slugify from 'slugify';
import {Link} from 'react-router-dom';
const ProductDetails = () => {
    const {slug} = useParams();
    const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res=>setData(res.data.products))
  },[])
    const productDetails = data.find(p=>slugify(p.title) === slug)
  return (
    <>
{!productDetails?<div className='d-flex justify-content-center'><img src="https://1.bp.blogspot.com/-Z4NueKmr1Bw/WMkssb-4RGI/AAAAAAAAA98/7BtKVFcqMo0PUMF81wEhsbWWkIMjJDlEQCLcB/s1600/Round%2BAnimated%2BLoading%2BGif.gif" alt="" /></div>:<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={productDetails.images[0]} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
      <p className="lead">{productDetails.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/products" className="btn btn-dark btn-lg px-4">Back</Link>
      </div>
    </div>
  </div>
</div>}

    </>
  )
}

export default ProductDetails