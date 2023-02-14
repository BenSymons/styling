import {useState, useEffect} from "react"
import axios from "axios"
import styles from "./modules.module.css"

const ModulesContainer = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/water`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])
    return (
        <div>
            <h1 className={styles.title}>Water Types!</h1>
            <div className={styles.tradContainer}>
                {pokemon.map((thisPokemon) => {
                    return (
                        <div>
                            {thisPokemon.pokemon.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ModulesContainer