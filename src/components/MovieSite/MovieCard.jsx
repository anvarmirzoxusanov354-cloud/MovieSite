import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="orange">{movie.vote_average}</span>
      </div>
      <span className="date">{movie.release_date}</span>
    </div>
  );
};

export default MovieCard;