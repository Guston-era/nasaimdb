import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './css/MovieScreen.css'

const MovieScreen = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [movieDetails, setMovieDetails] = useState(null)

  const url = `${process.env.REACT_APP_IMDBURLSINGLE}/${movieId}?api_key=${process.env.REACT_APP_IMDBAPIKEY}`
  //  useEffect to load movie details
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

          // console.log(res)
        } else {
          setMovieDetails(res)
          // console.log(res)
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
            <div className="wrapper" data-test-id="moviedetails">
              <img
                src={
                  movieDetails?.poster_path
                    ? `https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`
                    : '/gallery.png'
                }
                layout="responsive"
                alt="Poster for movie"
              />
              <h2 data-test-id="moviedetailstitle">
                <strong>Title: </strong> {movieDetails?.title}
              </h2>
              <h2 data-test-id="moviedetailstagline">
                <strong>Tagline: </strong> {movieDetails?.tagline}
              </h2>
              <h2 data-test-id="moviedetailsoverview">
                <strong>Overview: </strong>
                {movieDetails?.overview}
              </h2>
              <h2 data-test-id="moviedetailsvotesaverage">
                <strong>Vote Average: </strong>
                {movieDetails?.vote_average}
              </h2>
              <h2 data-test-id="moviedetailsvotestotal">
                <strong>Total Votes: </strong>
                {movieDetails?.vote_count}
              </h2>
              <h2 data-test-id="moviedetailsstatus">
                <strong>Status: </strong> {movieDetails?.status}
              </h2>
              <h2 data-test-id="moviedetailslink">
                <strong>IMDB Link: </strong>
                <a
                  href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {movieDetails?.imdb_id}
                </a>
              </h2>
              <h2 data-test-id="moviedetailsbudget">
                <strong>Budget: </strong>
                {movieDetails?.budget || 'Unknown budget costs'}
              </h2>
              <h2>
                <strong>Production Countries: </strong>
              </h2>
              <ul data-test-id="moviedetailscountries">
                {movieDetails?.production_countries?.map((country, key) => (
                  <li key={key}>{country.name}</li>
                ))}
              </ul>
              <h2>
                <strong>Genres: </strong>
              </h2>
              <ul data-test-id="moviedetailsgenres">
                {movieDetails?.genres?.map((genre, key) => (
                  <li key={key}>{genre.name}</li>
                ))}
              </ul>
              <h2>
                <strong>Languages: </strong>
              </h2>
              <ul data-test-id="moviedetailslanguages">
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
