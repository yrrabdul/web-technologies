import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ color: 'rgb(196, 48, 92)' }}>
          <strong>Stream Pulse</strong>
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                TV-Shows
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                Watchlist
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <a href="signup.html" className="button">
            Create an Account
          </a>
          <a href="login.html" className="button">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
