import React, { useContext } from 'react'
import './similarMovies.css'
import { Link } from "react-router-dom";
import honeyImg from '../../assets/honey.jpeg'
import { MovieContext } from '../../context/MovieContext'



const SimilarMovies = () => {
    const {movies} = useContext(MovieContext);

  return (
    <div id="similar-movies">
        <h1>Related Movies</h1>
        {
            movies?.length > 0
            ? (
                <div className="similar-container">
                    {movies.map((movie) => (
                        <Link to={`/movie/${movie.imdbID}`} >
                        <div className="similar-movies">
                            <div>
                                <img src={movie.Poster  !== 'N/A' ? movie.Poster: honeyImg} alt={movie.Title} />
                            </div>
        
                            <div className="similar-movie-title"> 
                                <h3 >{movie.Title}</h3>
                                <p className='sm-year'>{movie.Year}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )
        }    </div>
  )
}

export default SimilarMovies;
