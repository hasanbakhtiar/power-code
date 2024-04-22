import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { TargetEmailContext } from '../context/TargetEmailContext';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data));
  },[])
  const [target,setTarget] = useContext(TargetEmailContext);
  return (
    <div className='container'>
      <h1>User list</h1>
        <ul className='user-list'>
          {users.map(item=>(
          <li>  <Link to="/email" key={item.id} onClick={()=>{setTarget(item.email)}}>{item.name}</Link>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default Users