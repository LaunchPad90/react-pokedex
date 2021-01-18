import React, { useContext } from 'react'
import styled from 'styled-components'

import { PokemonContext } from '../App/App.js'
import Card from '../../components/Card/Card.js'


const CardContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  `;

export default function HomePage() {

    const allPokemon = useContext(PokemonContext);


    return (
        <div>
            <CardContainer>
                {allPokemon.map(p => (
                    <Card
                        pokemon={p}
                        key={p.id}
                    />
                ))}
            </CardContainer>
        </div>
    )
}
