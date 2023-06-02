import React from 'react'
import { Link } from 'react-router-dom'

function Movie(props) {
  let url = '/'+props.note.show.id;
  return (
    <Link to={url}>
      <div className='movi'>
          <img className='movi-img' src={props.note.show.image.medium} alt="can't be loaded" />
          <div className='movi-name'> {props.note.show.name}</div>
      </div>
    </Link>
  )
}

export default Movie
