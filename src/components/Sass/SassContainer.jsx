import {useState, useEffect} from "react"
import axios from "axios"
import "./styles.scss"

const SassContainer = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/electric`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])

    return (
        <div>
            <h1>Electric Types!</h1>
            <div className="sass-container">
                {pokemon.map((thisPokemon) => {
                    return (
                        <div className="card">
                            {thisPokemon.pokemon.name}
                        </div>
                    )
                })}
            </div>
            <div className="card">
                Some other content
            </div>
        </div>
    )
}

export default SassContainer