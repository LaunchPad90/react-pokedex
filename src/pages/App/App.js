import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Home from '../HomePage/HomePage'
import Details from '../DetailsPage/DetailsPage'

const gitHubUrl = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const Div = styled.div`
  background: #3a3a3a;
  height: 20vh;
  color: palevioletred;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonContext = React.createContext([]);

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setPokemon(jsonData.pokemon);
  }, []);

  return (
    <Router>
      <PokemonContext.Provider value={pokemon}>
        <div className="App">
            <Div>Pokedex</Div>
            <Switch>
                <Route path="/details/:pokemonNum" component={Details} />
                <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </PokemonContext.Provider>
    </Router>
  );
}

export default withRouter(App);