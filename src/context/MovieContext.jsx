import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext(null);
const API_URL = 'https://www.omdbapi.com?apikey=bf9758c3';

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentSearch, setCurrentSearch] = useState("avengers")
    const [movieDetails, setMovieDetails] = useState(null);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            navigate('/');
        } else {
            searchMovies(searchTerm);
            setCurrentSearch(searchTerm);
            navigate('/');
        }
      
    };

    useEffect(() => {
        searchMovies("avengers");
    }, []);

    const fetchMovieDetails = async (imdbID) => {
        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setMovieDetails(data);
    }

    const contextValue = { movies, searchTerm, setSearchTerm, searchMovies, currentSearch, setCurrentSearch, movieDetails, fetchMovieDetails, handleSearch};

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
