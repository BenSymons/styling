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

    const StyledWrapper = styled.div`
        display: flex;
        width: 80vw;
        background-color: #cccccc;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
    `
    const StyledCard = styled.div`
        border: 1px solid black;
        padding: 2px;
        margin: 3px;
        background-color: ${props => props.bg || "green"}
    `

    return (
        <div>
            <h1>Grass Types!</h1>
            <StyledWrapper>
            {pokemon.map((thisPokemon, index) => {
                return (
                    <StyledCard>
                        {thisPokemon.pokemon.name}
                    </StyledCard>
                )
                })}
            </StyledWrapper>
        </div>
    )
}

export default StyledContainer