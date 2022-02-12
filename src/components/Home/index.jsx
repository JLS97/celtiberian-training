import { useEffect, useState } from "react";
import { getCharacters } from "../../api/services";

const Home = () => {
    const [personajes, setPersonajes] = useState(null);
    

    useEffect(() =>{
        getCharacters(setPersonajes)
    },[personajes]);

    return (
        <div>
            {personajes != null ? (
                personajes.map((personaje,i) =>{
                    return (
                        <div key={personaje.id + i}>
                            <a href={`/character/${personaje.id}`} >{personaje.name}</a>
                        </div>
                    )
                })
            ) : (<p>No hay personajes</p>)}
        </div>
    )
}

export default Home;