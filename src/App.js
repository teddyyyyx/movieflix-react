import React from "react";
import "./App.css"
import { Movie } from "./components/Movie/Movie";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <Movie />
        </div>
    )
}

export default App;


