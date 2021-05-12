import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ name, species, image, status }) => {
  <>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{species}</p>
    <p>{status}</p>

  </>
} 

Character.propTypes = {
  name: PropTypes.name.isRequired,
  species: PropTypes.species.isRequired,
  image: PropTypes.image.isRequired,
  status: PropTypes.status.isRequired,
}

export default Character;
