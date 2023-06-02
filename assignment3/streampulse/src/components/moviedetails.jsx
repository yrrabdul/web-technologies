import React, { useEffect, useState } from 'react';
import API_KEY from '../config.js';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log('Error fetching movie details:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      {/* Additional movie details can be displayed here */}
    </div>
  );
};

export default MovieDetails;
