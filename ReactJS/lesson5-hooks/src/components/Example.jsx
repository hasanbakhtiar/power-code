import { useEffect, useState } from "react"
import { users } from "./data/users";
// import List from "./components/List"
// import { users } from "./data/users"
const a = "test";
const Example = () => {
    const [name,setName] = useState("Henry");
    const [data,setData] = useState("Hello");


    useEffect(()=>{
        console.log('change data');
    },[name])
    
    
    const changeName = ()=>{
        setName(users[0].name);
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{data}</h1>
        <button onClick={changeName}>update</button>

        {/* {users.map(item=>(
        <List titleone={item.id} titletwo={item.name} titlethree={item.age} />
        ))} */}
    </div>
  )
}

export default Example