import React, { useState } from 'react'

const product = {
    id: 1,
    title: "ASUS Vivobook 15 Intel Core i5-1235U 8GB 512GB SSD DOS 15.6",
    img: "https://cdn.dsmcdn.com/ty1102/product/media/images/prod/PIM/20231222/11/8997a73a-7685-4d4a-9941-99ab27c7ca88/1_org_zoom.jpg",
    stock: 10,
    price: 600
}

const Basket = () => {
    const [count, setCount] = useState(1);
    const [alert,setAlert] = useState({
        text:"",
        style:""
    })
    return (
        <div className="container">
            <p className={`${alert.style} mt-5 text-center`}>{alert.text}</p>
            <div className='d-flex align-items-center'>
                <img width={200} src={product.img} alt="" />
                <div className='ms-5'>
                    <h3>{product.title} </h3>
                    <h4 className='my-3'>{product.price * count} AZN</h4>
                    <button className='btn btn-danger' onClick={() => {
                        if (count > 1) {
                            setCount(count - 1)
                            setAlert({
                                text:"",
                                style:""
                            })
                        }
                    }}>-</button>
                    <span className='mx-3'>{count}</span>
                    <button className='btn btn-success' onClick={() => {
                        if (count < product.stock) {
                            setCount(count + 1)
                            
                        } else {
                            setAlert({
                                text:"Stock out",
                                style:"alert alert-danger"
                            })
                        }
                    }}>+</button>

                </div>
            </div>
        </div>
    )
}

export default Basket