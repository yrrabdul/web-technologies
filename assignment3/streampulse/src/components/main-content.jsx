import React, { useEffect, useState } from 'react';
import '../css/styles.css';
import API_KEY from '../config.js';

const MainContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setPopularMovies(data.results);
      })
      .catch(error => {
        console.log('Error fetching popular movies:', error);
      });

    // Fetch upcoming movies
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setUpcomingMovies(data.results);
      })
      .catch(error => {
        console.log('Error fetching upcoming movies:', error);
      });

    // Fetch top-rated movies
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setTopRatedMovies(data.results);
      })
      .catch(error => {
        console.log('Error fetching top-rated movies:', error);
      });
  }, []);

  return (
    <div className='movie-segment'>
      <h4 className="heading">Upcoming</h4>
      <div className="movies-container">
        <div className="movies-row">
          {upcomingMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie Image" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="heading">Top Rated</h4>
      <div className="movies-container">
        <div className="movies-row">
          {topRatedMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie Image" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="heading">Popular</h4>
      <div className="movies-container">
        <div className="movies-row">
          {popularMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie Image" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default MainContent;
