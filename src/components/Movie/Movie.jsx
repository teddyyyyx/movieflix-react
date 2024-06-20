import React, { useContext } from 'react'
import { MovieContext } from '../../Context/MovieContext'
import MovieCard from '../MovieCard/MovieCard';
import './movie.css'
export const Movie = () => {
    const {movies} = useContext(MovieContext);

  return (
        <>           
            {
                movies?.length > 0
                ? (
                    <div className="movie-container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </>
  )
}
