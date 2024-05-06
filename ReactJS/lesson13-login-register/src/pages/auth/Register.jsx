import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Register = () => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passRef = useRef();
    const againpassRef = useRef();
    

    const registerSubmit =e=>{
        e.preventDefault();
        if (!nameRef.current.value || !surnameRef.current.value || !emailRef.current.value || !phoneRef.current.value || !passRef.current.value || !againpassRef.current.value) {
        
            swal("Please fill input","","warning");
        }else{
            if (passRef.current.value === againpassRef.current.value) {
                swal("Account was created!","Redireted in 2 seconds","success");
                const userdata = {
                    name:nameRef.current.value,
                    surname:surnameRef.current.value,
                    email:emailRef.current.value,
                    phone:phoneRef.current.value,
                    password:passRef.current.value,
                }
                localStorage.setItem("userdata",JSON.stringify(userdata));
                setTimeout(()=>{
                    window.location.assign('/');
                },2000)
                
            }else{
                swal("Password is different!","","error")
            }
        }
    }
    
    
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
    <h1 className='my-5'>Register</h1>
    <div className="col-4">
        <form onSubmit={registerSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input ref={nameRef} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Surname</label>
                <input ref={surnameRef} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input ref={phoneRef} type="text" className="form-control" />
            </div>
            

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input ref={emailRef} type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Again Password</label>
                <input ref={againpassRef} type="password" className="form-control" />
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