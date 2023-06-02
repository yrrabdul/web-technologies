import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0" id="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: 'rgb(196, 48, 92)' }}>
          <strong>Stream Pulse</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Movies
              </Link>
            </li> 
            <li className="nav-item">
              <Link to="/watchlist" className="nav-link">
                Watchlist
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 nav-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <Link to="/signup" className="nav-button">
            Create an Account
          </Link>
          <Link to="/login" className="nav-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
