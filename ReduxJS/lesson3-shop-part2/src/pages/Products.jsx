import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux';

const Products = () => {
    const data = useSelector(p=>p);
  return (
    <div>
        <h1 className='text-center my-5'>Products</h1>
            <Row className='g-5'>
                {data.map(item=>{
                return    <SingleCard alldata={item} key={item.id} />

                })}
            </Row>
    </div>
  )
}

export default Products