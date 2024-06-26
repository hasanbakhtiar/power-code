import { Link, NavLink } from "react-router-dom"


const Header = () => {
  const logout = ()=>{
    localStorage.setItem('adminlogin','false');
    localStorage.setItem('login','false');
    window.location.reload();
  }
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link to="/" className="navbar-brand">Film Stone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
      </ul>
      <div>
            {localStorage.getItem("adminlogin") === 'true'?<div><Link className="btn btn-warning" to="/admin">Admin</Link><button className="btn btn-danger ms-3" onClick={logout}>Log out</button></div>:localStorage.getItem('login')==="true"?<div><Link className="btn btn-warning" to="/useraccount">{localStorage.getItem('username')}</Link><button className="btn btn-danger ms-3" onClick={logout}>Log out</button></div>:<Link className="btn btn-warning" to="/login">Login</Link>}
            
        {localStorage.getItem('adminlogin')==='true'?<Link className="btn btn-dark ms-3" to="/dashboard">Dashboard</Link>:""}

      </div>
    
    </div>
  </div>
</nav>

  )
}

export default Header