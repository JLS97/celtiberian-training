import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacter } from "../../api/services";

const Character = () => {
    const {id} = useParams();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        getCharacter(setPersonaje,id)
    },[id])

    return (
        <div>
            { personaje != null ? (<p>{ personaje.name }</p>) : (<p>No hay informacion sobre este personaje</p>) }
        </div>
    )
}

export default Character;