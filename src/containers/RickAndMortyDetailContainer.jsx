import React, { Component } from 'react'
import CharacterDetail from '../components/app/characters/CharacterDetail'
import { findCharacterById } from '../services/rickandmortyApi'

export default class RickAndMortyDetailContainer extends Component {
  state = {
    character: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const character = await findCharacterById();

    this.setState({
      character,
    });
  }

  render() {
    const { character } = this.state;
    return <CharacterDetail { ...character } />;
  }
}
