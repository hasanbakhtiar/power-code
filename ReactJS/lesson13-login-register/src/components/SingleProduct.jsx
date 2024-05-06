import React from 'react'
import {Link} from 'react-router-dom';
import { useCart } from 'react-use-cart';
import slugify from 'slugify';
import swal from 'sweetalert';
const SingleProduct = ({alldata}) => {
    const {addItem} = useCart();
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card" >
            <img height={300} style={{objectFit:"contain"}} src={alldata.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{alldata.title.slice(0,10)}...</h5>
                <p className="card-text">{alldata.description.slice(0,30)}...</p>
                <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-dark">Read more</Link>
                {localStorage.getItem('token')?<button  className='btn btn-warning ms-3' onClick={() => {addItem(alldata);
                swal({
                    title: "Good job!",
                    text: "Your product added to cart",
                    icon: "success",
                    button: "Ok",
                  });    
            }
            }>Add to cart</button>:<Link to="/login"  className='btn btn-warning ms-3'> 
            Add to cart</Link>}
            </div>
        </div>
        </div>

    )
}

export default SingleProduct