import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin: 30px;
    width: 250px;
    height: 200px;
    text-align: center;
    border: 3px solid black;

    .name {
        font-size: 30px;
        text-decoration: none;
        color: red;
    }
`;

export default function Card({pokemon}) {
    console.log(pokemon.name)
    return (
        <Div>
            <div className="name">{pokemon.name}</div>
            <div className="num">{pokemon.num}</div>
            <img className="photo" alt={pokemon.name} src={pokemon.img} />
        </Div>
    )
}
