import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RickAndMortyContainer from '../../containers/RickAndMortyContainer'
import RickAndMortyDetailContainer from '../../containers/RickAndMortyDetailContainer'


export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={RickAndMortyContainer} />
        <Route path="/:id" component={RickAndMortyDetailContainer} />
      </Switch>
    </Router>
  )
}
