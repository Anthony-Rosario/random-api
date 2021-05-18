import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Character({ id, name, species, image, status }) {
  console.log(id)
  return(
  <>
    <Link key={id} to={`/${id}`}>  
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
      <p>{id}</p>
    </Link>
  </>
  )
} 

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default Character;
