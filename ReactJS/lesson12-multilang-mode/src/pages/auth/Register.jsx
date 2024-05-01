import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <h1 className='my-5'>Register</h1>
    <div className="col-4">
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Surname</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" />
            </div>
            

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Again Password</label>
                <input type="password" className="form-control" />
            </div>

            

            <div className="d-flex flex-column">
            <button type="submit" className="btn btn-dark">Register</button>
            <Link to="/login" className="btn btn-dark mt-4">Already have an account?</Link>
            </div>
        </form>
    </div>


</div>
  )
}

export default Register