import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
<div className="px-4 py-5 my-5 text-center" >
  <h1 className="display-5 fw-bold text-body-emphasis">Welcome to Laptop Lab</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">At Laptop Lab, we're more than just a store. We're a community of individuals passionate about Asus. From our humble beginnings to where we are now, our journey has been fueled by our dedication to providing exceptional products and outstanding service to our customers.</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link type="button" to="/products" className="btn btn-dark btn-lg px-4 gap-3">Shop now</Link>
    </div>
  </div>
</div>

  )
}

export default Home