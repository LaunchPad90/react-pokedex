import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { PokemonContext } from '../App/App'

const Div = styled.div`
    
`;

export default function DetailsPage() {
    const { pokemonNum } = useParams();
    const allPokemon = useContext(PokemonContext);
    const data = allPokemon.find(({num}) => {
        return num === pokemonNum;
    })

    if (!data) {
        return null;
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <Div>
                <h1>{data.name}</h1>
            </Div>
            
        </div>
    )
}
