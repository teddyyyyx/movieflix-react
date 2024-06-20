import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import honeyImg from '../../../src/assets/honey.jpeg'
import './movieDetails.css'
import SimilarMovies from '../SimilarMovies/SimilarMovies';

export const MovieDetails = () => {
    const { imdbID } = useParams();
    const { movieDetails, fetchMovieDetails } = useContext(MovieContext);

    useEffect(() => {
        fetchMovieDetails(imdbID);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [imdbID]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }


    console.log(movieDetails)
    return ( 
        <div id='movie-details'>
            <div className="movie-details-container">
                <img src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster: honeyImg} alt={movieDetails.Title} />
                <div className="movie-info">
                    <h1>{movieDetails.Title}</h1>
                    <p>{movieDetails.Plot}</p>

                    <p><span>Release Date:</span> {movieDetails.Released}</p>
                    <p><span>Writers:</span> {movieDetails.Writer}</p>
                    <p><span>Director:</span> {movieDetails.Director}</p>
                    <p><span>Genre:</span> {movieDetails.Genre}</p>
                    <p><span>Runtime:</span> {movieDetails.Runtime}</p>
                    <p><span>Box Office:</span> {movieDetails.BoxOffice}</p>
                    <p><span>Type:</span> {movieDetails.Type}</p>
                    <p><span>Rated:</span> {movieDetails.Rated}</p>
                </div>
            </div>

            <SimilarMovies />
        </div>
    );
};

export default MovieDetails;
