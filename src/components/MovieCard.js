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
    <div className="movie-wrapper" data-test-id="moviewrapper">
      <Link to={`movies/${id}`} data-test-id="wrapperlink">
        <div
          className="float-div"
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-test-id="wrapperfloat"
        ></div>
        <h1 data-test-id="wrappertitle">{original_title}</h1>
        <h4>Description:</h4>
        <p className="description" data-test-id="wrapperdescription">{overview}</p>
        <p className="popularity" data-test-id="wrapperpopularity">
          Popularity: <em>{popularity}</em>
        </p>
        <p className="release-date" data-test-id="wrapperreleasedate">
          Release Date: <em>{release_date}</em>
        </p>
      </Link>
    </div>
  )
}

export default MovieCard
