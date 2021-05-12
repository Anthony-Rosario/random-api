import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

const CharacterList = ({ characters }) => {
  return(
  <ul aria-label='characters'>
    {characters.map((character) => (
      <li key={character.id[0]}>
        <Character 
          name={character.name}
          species={character.species}
          image={character.image}
          status={character.status}
        />
      </li>
    ))}
  </ul>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
