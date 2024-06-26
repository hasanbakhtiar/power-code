import { useRef } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import supabase from "../config/connectdb";

interface userType{
    email:string,
    password:string
}
const adminuser:userType = {
    email:"admin@filmstone.com",
    password:"superadmin007"
}




const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    
    const loginSubmited = (e:React.FormEvent)=>{
        e.preventDefault();
        if (!emailRef.current!.value || !passRef.current!.value) {
            swal('Please, fill inputs','','warning');
        }else{
            if (emailRef.current!.value === adminuser.email && passRef.current!.value === adminuser.password) {
                localStorage.setItem('adminlogin','true');
                localStorage.setItem('login','false');
                swal('Admin login had been successfully','','success');
                setTimeout(()=>{
                    window.location.reload();
                },2000);
            }else{
                const createLogin = (user:string)=>{
                    localStorage.setItem('login','true');
                    localStorage.setItem('adminlogin','false');
                    localStorage.setItem('username',user);
                swal('User login had been successfully','','success');
                setTimeout(()=>{
                    window.location.reload();
                },2000);
                }
                const checkuser = async()=>{
                    const {data,error} = await supabase.from('users').select();

                    if (error) {
                        console.log(error);
                        
                    }else{
                        data.map((item:any)=>(
                                item.email === emailRef.current!.value && item.password ===  passRef.current!.value ? createLogin(item.fullname):swal("Email or password is wrong!","","error")
                        ))
                        
                    }

                
                }
                checkuser();
            }
        }
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5">Login</h1>
        <div className="col-6">
                <form onSubmit={loginSubmited}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input ref={emailRef} type="email" className="form-control"   />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input ref={passRef} type="password" className="form-control"  />
            </div>

            <button type="submit" className="btn btn-dark mt-3">Login</button>
            </form>
            <Link to="/register" className="btn btn-warning mt-3">Register</Link>


        </div>
    </div>
  )
}

export default Login