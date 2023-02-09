import {useState, useEffect} from "react"
import axios from "axios"

const Container = () => {
    const [pokemon, setPokemon] = useState([])
    const [selected, setSelected] = useState("")
    const [image, setImage] = useState()

    // Fetches all fire pokemon
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/fire`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])

    // This useEffect will fetch the pokemon image whenever selected changes
    useEffect(() => {
        axios.get(selected).then(res => {
            setImage(res.data.sprites.front_default)
        })
    }, [selected])

    // Event handler
    const handleHover = (url, e) => {
        setSelected(url)
    }

    return (
        <div>
            <h1>Fire Types!</h1>
            <div className="tradContainer">
                <img src={image} alt="pokemon sprite"/>
            {pokemon.map((thisPokemon) => {
                return (
                    <div 
                        className="trad-card"
                        onMouseOver={(e) => handleHover(thisPokemon.pokemon.url, e)}
                    >
                        {thisPokemon.pokemon.name}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Container