import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './css/MovieScreen.css'

const MovieScreen = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [movieDetails, setMovieDetails] = useState(null)
  const url = `${process.env.REACT_APP_IMDBURLSINGLE}/${movieId}?api_key=${process.env.REACT_APP_IMDBAPIKEY}`
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        if (res?.success === false) {
          navigate('/not-found')

          console.log(res)
        } else {
          setMovieDetails(res)
          console.log(res)
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })

    // return function cleanup() {
    //   abortcontroller.abort()
    // }
  }, [movieId])

  return (
    <>
      {loading ? (
        <h2> Loading...</h2>
      ) : (
        <>
          {movieDetails ? (
            <div className="wrapper">
              <img
                src={
                  movieDetails?.poster_path
                    ? `https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`
                    : '/gallery.png'
                }
                layout="responsive"
                alt="Poster for movie"
              />
              <h2>
                <strong>Title: </strong> {movieDetails?.original_title}
              </h2>
              <h2>
                <strong>Tagline: </strong>
              </h2>
              <h2>
                <strong>Overview: </strong>
                {movieDetails?.overview}
              </h2>
              <h2>
                <strong>Vote Average: </strong>
                {movieDetails?.vote_average}
              </h2>
              <h2>
                <strong>Total Votes: </strong>
                {movieDetails?.vote_count}
              </h2>
              <h2>
                <strong>Status: </strong> {movieDetails?.status}
              </h2>
              <h2>
                <strong>IMDB Link: </strong>
                <a
                  href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {movieDetails?.imdb_id}
                </a>
              </h2>
              <h2>
                <strong>Budget: </strong>
                {movieDetails?.budget || 'Unknown budget costs'}
              </h2>
              <h2>
                <strong>Production Countries: </strong>
              </h2>
              <ul>
                {movieDetails?.production_countries?.map((country, key) => (
                  <li key={key}>{country.name}</li>
                ))}
              </ul>
              <h2>
                <strong>Genres: </strong>
              </h2>
              <ul>
                {movieDetails?.genres?.map((genre, key) => (
                  <li key={key}>{genre.name}</li>
                ))}
              </ul>
              <h2>
                <strong>Languages: </strong>
              </h2>
              <ul>
                {movieDetails?.spoken_languages?.map((lang, key) => (
                  <li key={key}>{lang.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>NotFound</p>
          )}
        </>
      )}
    </>
  )
}

export default MovieScreen
