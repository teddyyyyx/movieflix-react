import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext(null);
const API_URL = 'https://www.omdbapi.com?apikey=bf9758c3';

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("spiderman");
    }, []);

    const contextValue = { movies, searchTerm, setSearchTerm, searchMovies};

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
