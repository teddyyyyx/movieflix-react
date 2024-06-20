import React from "react";
import "./App.css";
import { Movie } from "./components/Movie/Movie";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

const App = () => {
    return (
            <div className="app">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Movie />} />
                    <Route exact path="/movie/:imdbID" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </div>
    );
};

export default App;
