import {useState, useEffect} from "react"
import axios from "axios"

const Container = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/fire`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])
    return (
        <div>
            <h1>Fire Types!</h1>
            <p className="title">bold</p>
            <div className="trad-container">
                {pokemon.map((thisPokemon) => {
                    return (
                        <div key={thisPokemon.pokemon.url} className="trad-card">
                            {thisPokemon.pokemon.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Container