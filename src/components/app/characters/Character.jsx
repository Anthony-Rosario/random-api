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
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default Character;
