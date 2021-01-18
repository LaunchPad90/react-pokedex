import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MdArrowBack } from "react-icons/md";

import { PokemonContext } from '../App/App'

const Div = styled.div`
    display: flex;
    justify-content: space-evenly;

    .current-evo {
        text-align: center;
    }

    .prev-evo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .next-evo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Tag = styled.span`
    padding: 8px;
    border-radius: 3px;
    margin-right: 8px;
`

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
            <Link to="/"><h1 style={{margin: '0', color: 'palevioletred'}}><MdArrowBack /></h1></Link>
            <Div>
                <div className="current-evo">
                    <h1>Details - {data.name}</h1>
                    <img className="photo" alt={data.name} src={data.img} />
                    <h3>Num:</h3>
                    <Tag>#{data.num}</Tag>
                    <div className="type">
                        <h3 className="type-span">Type:</h3>
                        {data.type.map((type) => <Tag key={type}>{type}</Tag>)}
                    </div>
                    <div className="weaknessess">
                        <h3 className="type-span">Weaknessess:</h3>
                        {data.weaknesses.map((weakness) => <Tag key={weakness}>{weakness}</Tag>)}
                    </div>
                    <div className="height">
                        <h3 className="height-span">Height:</h3>
                        <Tag>{data.height}</Tag>
                    </div>
                    <div className="weight">
                        <h3 className="weight-span">Weight:</h3>
                        <Tag>{data.weight}</Tag>
                    </div>
                </div>
                <div className="prev-evo">
                    <h1>Previous Evolutions</h1>
                    {data.prev_evolution && data.prev_evolution.map(e => {
                        return <Link style={{fontSize: '30px'}} key={e.num} to={`/details/${e.num}`}>{e.name}</Link>
                    })}
                </div>
                <div className="next-evo">
                    <h1>Next Evolutions</h1>
                    {data.next_evolution && data.next_evolution.map(e => {
                        console.log(e)
                        return <Link style={{fontSize: '30px'}} key={e.num} to={`/details/${e.num}`}>{e.name}</Link>
                    })}
                </div>
                
            </Div>
            
        </div>
    )
}
