import {useState, useEffect} from "react"
import axios from "axios"
import styles from "./Modules/styles.module.css"

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
            <div className={styles.tradContainer}>
                {pokemon.map((thisPokemon) => {
                    return (
                        <div className={styles.moduleCard}>
                            {thisPokemon.pokemon.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ModulesContainer