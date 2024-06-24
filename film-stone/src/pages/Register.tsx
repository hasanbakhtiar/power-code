import { useRef } from "react";
import swal from "sweetalert";
import supabase from "../config/connectdb";

const Register = () => {
  const fullnameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);

  const registerSubmited = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullnameRef.current?.value ||
        !birthdayRef.current?.value ||
        !telRef.current?.value ||
        !emailRef.current?.value ||
        !passRef.current?.value ||
        !confirmPassRef.current?.value
    ) {
        swal('Please, fill inputs','','warning');
    }else{
            if (passRef.current?.value !==
                confirmPassRef.current?.value) {
                swal('Passwords are not equal! ')
            }else{
                const createuser = async()=>{
                    const {error} = await supabase.from('users').insert({
                        fullname:fullnameRef.current?.value,
                        birthday:birthdayRef.current?.value,
                        tel:telRef.current?.value,
                        email:emailRef.current?.value,
                        password:passRef.current?.value
                    });
                    if (error) {
                        console.log(error);
                        swal("Something is wrong!","","error");
                        
                    }else{
                        swal("New user account had been created!","","success");
                        
                    }
                }
                createuser();
            }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5">Register </h1>
      <div className="col-6">
        <form onSubmit={registerSubmited}>
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input ref={fullnameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
                <label  className="form-label">Date of birth</label>
                <input ref={birthdayRef}  type="date" className="form-control"   />
            </div>
          <div className="mb-3">
                <label  className="form-label">Phone number</label>
                <input ref={telRef} type="tel" className="form-control"   />
            </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control" />
          </div>
            <hr className="text-primary" />
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={passRef} type="password" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input ref={confirmPassRef} type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-dark mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
