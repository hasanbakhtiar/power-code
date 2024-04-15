import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {
  const [userdata,setUserdata] = useState([]);
  
  const dataSubmited=(comingkey)=>{
    axios.get(`https://api.github.com/search/users?q=${comingkey}`)
    .then(res=>setUserdata(res.data.items))
    console.log(comingkey);
  }
  return (
    <div>
        <Header />
        <Search sendkeyword={dataSubmited} />
        <Users fetchuser={userdata} />
    </div>
  )
}

export default App