import { useState } from "react";

const HighOrderComponent = (OriginalCompo: any) => {
  const newCompo = (props: any) => {
    const [count, setCount] = useState<number>(0);
    return <OriginalCompo  
    {...props}
    count={count}
    intCount = {()=>{setCount((count:any)=>count+1)}}
    decCount = {()=>{setCount((count:any)=>count-1)}}/>;
  };
  return newCompo;
};

export default HighOrderComponent;
