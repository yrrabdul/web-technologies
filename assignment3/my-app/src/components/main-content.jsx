import React from 'react';

const MainContent = () => {
  return (
    <div>
      <h4 className="heading">Up Coming</h4>
      <div className="movies-container">
        <div className="movies-row">
          <div className="movie-card">
            <img src="images/trending1.jpg" alt="Movie Image" />
            <div className="movie-info">
              <h3 className="movie-title">Iron Man</h3>
              <p className="movie-description">Movie</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="heading">Top Rated</h4>
      <div className="movies-container">
        <div className="movies-row">
          <div className="movie-card">
            <img src="images/trending8.jpg" alt="Movie Image" />
            <div className="movie-info">
              <h3 className="movie-title">Ant Man</h3>
              <p className="movie-description">Movie</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="heading">Popular</h4>
      <div className="movies-container">
        <div className="movies-row">
          <div className="movie-card">
            <img src="images/trending16.jpg" alt="Movie Image" />
            <div className="movie-info">
              <h3 className="movie-title">Hobbit</h3>
              <p className="movie-description">Movie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
