import {useState, useEffect} from "react"
import axios from "axios"

const StyledContainer = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/grass`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])
    return (
        <div>
            <h1>Grass Types!</h1>
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

export default StyledContainer