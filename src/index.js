import React from "react";
import ReactDOM from "react-dom/client"

import App from './App.js';
import MovieProvider from "./context/MovieContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/movieflix-react">
      <MovieProvider>
        <App />
      </MovieProvider>,
    </BrowserRouter>
  )
  