import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList/MovieList';
import axios from 'axios';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, [])

  async function getAllMovies() {
    let response = await axios.get("http://localhost:8080/movies");
    setMovies(response.data);
  }

  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
