import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList/MovieList';
import axios from 'axios';


function App() {
  const [movies, setMovies] = useState([]);


  return (
    <div>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
