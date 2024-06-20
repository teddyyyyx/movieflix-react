import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import MovieCard from '../MovieCard/MovieCard';
import './movie.css'
export const Movie = () => {
    const {movies, currentSearch} = useContext(MovieContext);
    console.log(movies)

  return (
        <div className='main-container'>         
            <p className='show-result'>Showing results for: <span>{currentSearch}</span></p>
            {
                movies?.length > 0
                ? (
                    <div className="movie-container">
                        {movies.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie}/>   
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
  )
}
