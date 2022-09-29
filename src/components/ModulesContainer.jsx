import {useState, useEffect} from "react"
import axios from "axios"

const ModulesContainer = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/water`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])
    return (
        <div>
            <h1>Water Types!</h1>
            {pokemon.map((thisPokemon) => {
                return (
                    <div>
                        {thisPokemon.pokemon.name}
                    </div>
                )
            })}
        </div>
    )
}

export default ModulesContainer