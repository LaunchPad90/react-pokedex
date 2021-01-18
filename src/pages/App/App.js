import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter, WithRouter } from 'react-router-dom'

import Home from '../HomePage/HomePage'
import Details from '../DetailsPage/DetailsPage'

const gitHubUrl = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

export const PokemonContext = React.createContext({});

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    const res = await fetch(gitHubUrl);
    const jsonData = await res.json();
    setPokemon(jsonData.pokemon);
  }, []);

  return (
    <PokemonContext.Provider value={pokemon}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </PokemonContext.Provider>
  )
}

export default withRouter(App);