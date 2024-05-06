import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


const userdata = JSON.parse(localStorage.getItem('userdata'));


const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            swal("Please, fill input","","warning");
        }else{
            if (emailRef.current.value === userdata.email && passRef.current.value === userdata.password) {
                swal("Login successfull","","success");
                localStorage.setItem('token',crypto.randomUUID());
                setTimeout(()=>{
                    window.location.assign('/');
                },1500)
            }else{
                swal("Email or password is wrong!","","error")
            }
        }
    }

    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='my-5'>Login</h1>
            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input ref={emailRef} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" />
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