import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Fuse from 'fuse.js'
import intersection from "lodash.intersection"
import uniq from "lodash.uniq"
import Select from 'react-select'

import { PokemonContext } from '../App/App.js'
import Card from '../../components/Card/Card.js'


const CardContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  `;

const getFormattedTypeOptions = (allPokemon) => {
    const typeOptions = [];
     
    allPokemon.forEach((pokemon) => {
        typeOptions.push(pokemon.type);
    })

    const allTypeOptions = typeOptions.flat();

    return uniq(allTypeOptions).map((option) => {
        return {value: option, label: option};
    })
}

export default function HomePage() {
    
    const [input, setInput] = useState('');
    const [typeFilters, setTypeFilters] = useState([]);
    const [weaknessesFilters, setWeaknessesFilters] = useState([]);

    const allPokemon = useContext(PokemonContext);

    const formattedTypeOptions = getFormattedTypeOptions(allPokemon);

    const filterByType = (pokemon) => {
        const flatTypeList = (typeFilters || []).map((typeOption) => typeOption.value)
        return intersection(flatTypeList, pokemon.type).length === flatTypeList.length;
    }

    const filterByWeaknesses = (pokemon) => {
        const flatWeaknessList = (weaknessesFilters || []).map((weaknessOption) => weaknessOption.value)
        return intersection(flatWeaknessList, pokemon.weaknesses).length === flatWeaknessList.length
    }

    const filteredByType = allPokemon.filter(filterByType);
    const filteredByWeaknesses = filteredByType.filter(filterByWeaknesses);
    
    const fuse = new Fuse(filteredByType, {
        keys: [
            'name'
        ],
        includeScore: true
    })

    const nameSearch = fuse.search(input);
    const nameSearchResults = input ? nameSearch.map(result => result.item) : filteredByWeaknesses;
    
    const handleChange = (e) => {
          setInput(e.target.value);
      }
      
    const typeFilterChange = (value) => {
        setTypeFilters(value);
    }
    const weaknessFilterChange = (value) => {
        setWeaknessesFilters(value);
    }
      
    return (
        <div>
            <span>Search By Name: <input placeholder="Pikachu" type="text" value={input} onChange={handleChange} /></span>

            <Select options={formattedTypeOptions} onChange={typeFilterChange} isMulti />
            <Select options={formattedTypeOptions} onChange={weaknessFilterChange} isMulti />

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
