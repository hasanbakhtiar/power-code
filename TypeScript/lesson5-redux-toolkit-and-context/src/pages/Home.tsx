import { useContext, useEffect } from "react"
import { CharacterContext } from "../context/CharacterContext"

const Home = () => {
    const [character] = useContext(CharacterContext);
    
  return (
    <div>
        {character.map((item:any)=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </div>
  )
}

export default Home