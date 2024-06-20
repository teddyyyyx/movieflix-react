import React from "react";
import './movieCard.css'
const MovieCard = ({movie}) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster} alt="movie1.Title"/>
            </div>

            <div>
            <span>{movie.Type}</span>
            <h3 className="movie-title">{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;