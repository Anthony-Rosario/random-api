import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CharacterDetail({ character: { name, species, image, status }, }) {
  return (
    <>
      <div>
        <Link to={'/'}>Back to the list</Link>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{species}</p>
        <p>{status}</p>
      </div>
    </> 
  )
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterDetail;
