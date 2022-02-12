import axios from "axios";

const getCharacters = async (state) => {
    const req = await axios.get('https://rickandmortyapi.com/api/character');
    state(req.data.results)
}

const getCharacter = async (state, id) => {
    const req = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(req.data)
}


export {getCharacters, getCharacter}