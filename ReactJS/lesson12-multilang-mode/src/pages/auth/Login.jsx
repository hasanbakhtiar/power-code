import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='my-5'>Login</h1>
            <div className="col-4">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    

                    <div className="d-flex flex-column  col">
                    <button type="submit" className="btn btn-dark">Login</button>
                    <Link to="/register" className="btn btn-dark mt-4">Create laptop lab account</Link>
                    </div>
                </form>
            </div>


        </div>
  )
}

export default Login