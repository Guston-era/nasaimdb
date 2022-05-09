import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import './css/HomePageScreen.css'
import top from '../svg/top.svg'
import bottom from '../svg/bottom.svg'
const HomePageScreen = () => {
  const [imageOfDay, setImageOfDay] = useState('') // state for top image
  const [movies, setMovies] = useState('') // state for movies
  const urlNasa = `${process.env.REACT_APP_NASAURL}?api_key=${process.env.REACT_APP_NASAAPIKEY}`
  // useEffect to load image
  useEffect(() => {
    fetch(urlNasa, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          if (res?.media_type !== 'video') {
            setImageOfDay(res?.url)
          }
          console.log(res)
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    // return function cleanup() {
    //   abortcontroller.abort()
    // }
  }, [])

  const urlImdb = `${process.env.REACT_APP_IMDBURL}?api_key=${process.env.REACT_APP_IMDBAPIKEY}&language=en-US&query=NASA&include_adult=false&1`
  //  useEffect to load movies
  useEffect(() => {
    fetch(urlImdb, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())

      .then((res) => {
        if (res) {
          console.log(res, 'loaded')
          // setImageOfDay(res?.url)
          setMovies(res?.results)
        } else {
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    // return function cleanup() {
    //   abortcontroller.abort()
    // }
  }, [])
  return (
    <div data-test-id="homewrapper">
      <div className="top-div" data-test-id="topdiv">
        {imageOfDay ? (
          <>
            <h1 className="top-text" data-test-id="toptext">
              <span>NASA: </span>Picture of the Day
              <div>
                {new Date().toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            </h1>
            <img
              alt="Nasa"
              src={imageOfDay}
              className="cover-image"
              data-test-id="topimage"
            />
          </>
        ) : (
          <img src={top} alt="loading" data-test-id="topimage" />
        )}
      </div>
      <div className={!movies ? `div` : `grid-div`} data-test-id="bottomdiv">
        {movies ? (
          <>
            {movies.map((movie, key) => (
              <MovieCard
                key={key}
                id={movie.id}
                overview={movie.overview}
                popularity={movie.popularity}
                release_date={movie.release_date}
                original_title={movie.original_title}
                poster_path={movie.poster_path}
              />
            ))}
          </>
        ) : (
          <img src={bottom} alt="loading" className="img-loading" />
        )}
      </div>
    </div>
  )
}

export default HomePageScreen
