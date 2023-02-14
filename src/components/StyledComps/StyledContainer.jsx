import {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

const StyledContainer = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/grass`).then(res => {
            setPokemon(res.data.pokemon)
        })
    }, [])

    const bg = "pink"

    const Wrapper = styled.div`
        background-color: #9dff9d;
        color: blue;
    `
    return (
        <div>
            <h1>Grass Types!</h1>
            <Wrapper>
                {pokemon.map((thisPokemon) => {
                    return (
                        <div style={{ fontSize: "30px"}}>
                            {thisPokemon.pokemon.name}
                        </div>
                    )
                })}
            </Wrapper>
        </div>
    )
}

export default StyledContainer