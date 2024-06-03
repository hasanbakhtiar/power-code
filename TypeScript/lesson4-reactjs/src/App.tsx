import { useMemo, useState } from "react"
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid';
const App:React.FC = () => {
    const [count,setCount] = useState<number>(0);

    const increment = ()=>{
        return <button onClick={()=>{setCount(count+1)}}>increment</button>
    }
    const uuidOptimal:any = useMemo(()=>uuidv4(),[]);
  return (
    <div>{count}
    {increment()}
    <List id={uuidOptimal} title="Hello" desc="desc"/>
    <List id={2} title="Hello1" desc="desc1"/>
    <List id={3} title="Hello2" desc="desc2"/>
    <List id={4} title="Hello3" desc="desc3"/>
    
    </div>
  )
}

export default App