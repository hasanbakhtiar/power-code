import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const TargetEmailContext = createContext();

export const TargetEmailProvider = ({children})=>{
    const [target,setTarget] = useState("");
    return <TargetEmailContext.Provider value={[target,setTarget]}>{children}</TargetEmailContext.Provider>
}