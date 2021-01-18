import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin: 30px;
    width: 250px;
    height: 350px;
    border-radius: 10px;
    text-align: center;
    border: 7px solid #e4bc46;
    background: #5fa8d3;

    .name {
        font-size: 30px;
        text-decoration: none;
    }
    .num {
        font-size: 12px;
    }
    .photo {
        border: 3px solid #fec601;
        border-radius: 7px;
        background: #fec601;
        width: 70%;
    }
`;

export default function Card({pokemon}) {
    return (
        <Div>
            <div className="name">{pokemon.name}</div>
            <div className="num">{pokemon.num}</div>
            <img className="photo" alt={pokemon.name} src={pokemon.img} />
            <div className="type">Type:{pokemon.type}</div>
            <div className="weakness">Weakness:{pokemon.weaknesses}</div>
        </Div>
    )
}
