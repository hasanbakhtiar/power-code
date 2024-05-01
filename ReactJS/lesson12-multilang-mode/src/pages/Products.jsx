import React from 'react'
import SingleProduct from '../components/SingleProduct'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { LangContext } from '../context/LangContext';
const Products = () => {
  const [data] = useContext(ProductContext);
  const [category,setCategory] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [active,setActive] = useState("");
  useEffect(()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then(res=>setCategory(res.data))
  },[])

  const filterData =(cat)=>{
    const ftrDt = data.filter(p=>p.category === cat);
    setFiltered(ftrDt);
    setActive(cat);
  }
  const [lang] = useContext(LangContext);
  return (
    <div>
      <h1 className='text-center my-5'>{lang === "AZ"?"Mehsullar":"Product List"}{!active?"":`/${active}`}</h1>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-3">
            <ul className="list-group">
              {category.slice(0,6).map((item,c)=>(
                <li key={c} className={`list-group-item ${active === item ? "active":""}`} onClick={()=>{filterData(item)}}>{item}</li>

              ))}
            </ul>

          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <div className="row g-5">
              {filtered.length===0?data.map(item => (
                <SingleProduct key={item.id} alldata={item} />
              )):filtered.map(item => (
                <SingleProduct key={item.id} alldata={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products