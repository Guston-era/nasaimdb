import React from 'react'
import { Link } from 'react-router-dom'
import './css/MovieCard.css'

const MovieCard = ({
  id,
  overview,
  popularity,
  release_date,
  original_title,
  poster_path,
}) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original//${poster_path}`
    : '/gallery.png'
  return (
    <div className="movie-wrapper">
      <Link to={`movies/${id}`}>
        <div
          className="float-div"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <h1>{original_title}</h1>
        <h4>Description:</h4>
        <p className="description">{overview}</p>
        <p className="popularity">
          Popularity: <em>{popularity}</em>
        </p>
        <p className="release-date">
          Release Date: <em>{release_date}</em>
        </p>
      </Link>
    </div>
  )
}

export default MovieCard
