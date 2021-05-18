import React, { Component } from 'react'
import CharacterList from '../components/app/characters/CharacterList'
import { findCharacters } from '../services/rickandmortyApi'

export default class RickAndMortyContainer extends Component {
  state = {
    characters: [],
    loading: true,
  }

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading, characters } = this.state;
    if(loading) return <h2>Loading...</h2>
    return <CharacterList characters={characters} />;
  }
}
