import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from 'react-use-cart';
import { ImSearch } from "react-icons/im";
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { useState } from 'react';
const Header = () => {
    const { totalItems } = useCart();
    const [keyword,setKeyword] = useState("");
    const [data] = useContext(ProductContext); 
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Laptop Lab</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/cart" className="btn btn-outline-warning position-relative">
                    <TiShoppingCart />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                </Link>
                <div>

                    <button type="button" className="btn btn-outline-warning ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <ImSearch />
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search products</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="input-group mb-3">
                                        <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product name" />
                                        <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                                    </div>
                                    <ul className="list-group">
                                        {!keyword?"":data.filter(p=>p.title.toLowerCase().includes(keyword)).map(item=>(
                                        <Link to={`/products/${slugify(item.title)}`} className="list-group-item"><div data-bs-dismiss="modal"><img style={{objectFit:"cover"}} src={item.images[0]} height={70} width={70} alt="img" /><span className='ms-3'>{item.title}</span></div></Link>
                                        ))}
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>

    )
}

export default Header