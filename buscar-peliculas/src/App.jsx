import React, { useState } from 'react'
import { Movies } from './Movies'
import { getMovies } from './services/getMovies'
export const App = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const handleChange = ({ target: { value } }) => {
    setSearch(value)
  }
  const onGetMovies = async (title) => {
    const result = title ? await getMovies(title) : await getMovies()
    return result
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    const result = await onGetMovies(search)
    setMovies(result)
  }

  return (
    <section className='container-fluid bg-dark min-vh-100 text-white p-5'>
      <h4 className='text-center'>Buscador de peliculas</h4>
      <div className='container'>
        <form
          action=''
          className='row g-3  my-3'
          onSubmit={async (e) => {
            handleSearch(e)
          }}
        >
          <div className='my-3 col-md-10'>
            <input
              type='text'
              className='form-control h-100'
              placeholder='Escribir película'
              value={search}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-2 '>
            <button className='btn btn-outline-light w-100'> Buscar </button>
          </div>
        </form>
      </div>
      <Movies movies={movies} />
    </section>
  )
}
