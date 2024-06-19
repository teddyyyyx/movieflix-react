import React from "react";
import ReactDOM from "react-dom/client"

import App from './App.js';
import MovieProvider from "./Context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <MovieProvider>
      <App />
    </MovieProvider>,
  )
  