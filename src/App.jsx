import React from 'react';
import "./index.css"; 
import Movie from './components/MovieSite/MovieCard';
import MovieCard from './components/MovieSite/Movie';


function App() {
  return (
    <div className="App">
      <Movie/>
      <MovieCard/>
    </div>
  );
}

export default App;
