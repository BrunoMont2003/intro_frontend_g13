import React from 'react'
import defaultImage from '../assets/default.png'
import { Link } from 'react-router-dom'
export const Movies = ({ movies }) => {
  return (
    <section className='py-4 container '>
      <ul className='row list-unstyled row-cols-1 row-cols-md-3 g-4'>
        {movies.length > 0 &&
          movies.map(({ Title, Poster, Year, imdbID }, index) => (
            <li className='col' key={index}>
              <Link to={`/movie/${imdbID}`}>
                <article className='card text-black'>
                  <figure>
                    <img
                      src={Poster !== 'N/A' ? Poster : defaultImage}
                      alt={Title}
                      className='card-img-top'
                    />
                  </figure>
                  <div className='card-body'>
                    <h6 className='card-title'>{Title}</h6>
                    <small className='card-text'>{Year}</small>
                  </div>
                </article>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  )
}
