import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMoviesDetails } from '../services/getMovies'

export const MoviesDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchMovie = async () => {
      const result = await getMoviesDetails(id)
      console.log(result)
      setMovie(result)
    }
    fetchMovie()
  }, [])
  return (
    <div className='container-fluid bg-dark min-vh-100 text-white p-5 d-flex justify-content-center align-content-center '>
      {!movie && <p>Loading ...</p>}
      {movie && (
        <article className='row d-flex justify-content-center align-content-center'>
          <aside className='col-md-6 d-flex justify-content-center'>
            <figure className='img'>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
          </aside>
          <aside className='col-md-6 d-flex flex-column gap-3'>
            <h1 className='text-center mb-5'>{movie.Title}</h1>
            <div className='d-flex gap-2'>
              <strong>Directed by:</strong>
              <span>{movie.Director}</span>
            </div>
            <div className='d-flex gap-2'>
              <strong>Released on :</strong>
              <span>{movie.Released}</span>
            </div>
            <div className='d-flex flex-wrap gap-2'>
              <strong>Written by :</strong>
              <span>{movie.Writer}</span>
            </div>
            <div className='d-flex flex-wrap gap-2'>
              <strong>Starring :</strong>
              <span>{movie.Actors}</span>
            </div>
            <div className='d-flex flex-wrap gap-2'>
              <strong>Plot:</strong>
              <span>{movie.Plot}</span>
            </div>
          </aside>
          <div className='w-100 p-5 d-flex justify-content-center '>
            <button
              className='btn btn-primary w-auto'
              onClick={() => {
                navigate('/')
              }}
            >
              Go Back
            </button>
          </div>
        </article>
      )}
    </div>
  )
}
