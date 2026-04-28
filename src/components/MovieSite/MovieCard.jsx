import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "Not Found"; 
  
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="orange">{rating}</span>
      </div>
      <span className="date">{movie.release_date}</span>
    </div>
  );
};

export default MovieCard;