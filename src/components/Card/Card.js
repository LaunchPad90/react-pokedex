import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = styled.div`
    margin: 30px;
    width: 400px;
    height: 550px;
    border-radius: 10px;
    text-align: center;
    border: 7px solid #edae49;
    background: #30638e;
    color: white;

    .name {
        font-size: 30px;
        text-decoration: none;
        justify-self: flex-start;
        margin: 5px 0 8px 0;
    }
    .num {
        font-size: 12px;
        margin-bottom: 8px;
    }
    .photo {
        border: 5px solid #edae49;
        border-radius: 7px;
        width: 50%;
    }
`;

const TypeTag = styled.span`
    padding: 8px;
    border-radius: 3px;
    background: #cce6f4;
    color: black;
    margin-right: 8px;
`
const WeaknessTag = styled.span`
    padding: 8px;
    border-radius: 3px;
    background: #d1495b;
    color: black;
    margin-right: 8px;
`

export default function Card({pokemon}) {
    return (
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${pokemon.num}`}>
            <Div>
                <div className="name">{pokemon.name}</div>
                <div className="num">#{pokemon.num}</div>
                <img className="photo" alt={pokemon.name} src={pokemon.img} />
                <div className="type">
                    <h3 className="type-span">Type:</h3>
                    {pokemon.type.map((type) => <TypeTag key={type}>{type}</TypeTag>)}
                </div>
                <div className="weaknessess">
                    <h3 className="type-span">Weaknessess:</h3>
                    {pokemon.weaknesses.map((weakness) => <WeaknessTag key={weakness}>{weakness}</WeaknessTag>)}
                </div>
            </Div>
        </Link>
    )
}
