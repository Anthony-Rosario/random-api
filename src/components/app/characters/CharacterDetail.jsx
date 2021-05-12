import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CharacterDetail = ({ name, species, image, status }) => {
  return (
    <>
    <Link to={'/'} />
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{species}</p>
        <p>{status}</p>
      </div>
    </> 
  )
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
}

export default CharacterDetail;
