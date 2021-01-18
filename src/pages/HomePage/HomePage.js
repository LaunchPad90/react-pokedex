import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'

import { PokemonContext } from '../App/App.js'
import Card from '../../components/Card/Card.js'


const CardContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  `;


export default function HomePage() {
    
    const [input, setInput] = useState('')

    const allPokemon = useContext(PokemonContext);
    
    const fuse = new Fuse(allPokemon, {
        keys: [
            'name'
        ],
        includeScore: true
    });
    const nameSearch = fuse.search(input);
    const nameSearchResults = input ? nameSearch.map(result => result.item) : allPokemon;
    
    const handleChange = (e) => {
          setInput(e.target.value);
      }

    return (
        <div>
            <span>Search By Name: <input placeholder="Pikachu" type="text" value={input} onChange={handleChange} /></span>
            <CardContainer>
                {nameSearchResults.map(p => (
                    <Card
                        pokemon={p}
                        key={p.id}
                    />
                ))}
            </CardContainer>
        </div>
    )
}
