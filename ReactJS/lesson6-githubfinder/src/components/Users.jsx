import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser'
import axios from 'axios';

const Users = ({fetchuser}) => {

  return (
    <div className='container mt-5'>
        <div className="row g-5">
        {fetchuser.map(item=>(
          <SingleUser alldata={item} key={item.id}/>
        ))}
        </div>
    </div>
  )
}

export default Users