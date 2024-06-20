import React from "react";
import { Link } from "react-router-dom";
import honeyImg from '../../assets/honey.jpeg'
import './movieCard.css'

const MovieCard = ({movie}) => {

    return (
        <div>
            <Link to={`/movie/${movie.imdbID}`} >
                <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                    </div>

                    <div>
                        <img src={movie.Poster  !== 'N/A' ? movie.Poster: honeyImg} alt={movie.Title} />
                    </div>

                    <div>
                    <span>{movie.Type}</span>
                    <h3 className="movie-title">{movie.Title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard;