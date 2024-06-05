import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CharacterContext:any = createContext<any>(null);


export const CharacterProvider:React.FC<any> = ({children})=>{
    const [character,setCharacter] = useState<any[]>([]);
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then((res:any)=>setCharacter(res.data.results))
    },[])
    return <CharacterContext.Provider value={[character,setCharacter]}>{children}</CharacterContext.Provider>
}