import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

const CharacterList = ({ characters }) => {
  <ul>
    {characters.map((character) => (
      <li>
        <Character 
          name={character.name}
          species={character.species}
          image={character.image}
          status={character.status}
        />
      </li>
    ))}
  </ul>
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id.isRequired,
      name: PropTypes.name.isRequired,
      species: PropTypes.species.isRequired,
      image: PropTypes.image.isRequired,
      status: PropTypes.status.isRequired,
    })
  )
}

export default CharacterList;
