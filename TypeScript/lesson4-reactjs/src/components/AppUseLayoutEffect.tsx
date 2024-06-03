import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [data,setData] = useState("Hello");
    useLayoutEffect(()=>{
        setData('new value');
        
    },[])
    return (
        <div>
        <h1>{data}</h1>
    </div>
  )
}

export default AppUseLayoutEffect