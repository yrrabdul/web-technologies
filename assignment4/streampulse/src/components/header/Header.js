import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <><nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0" id="navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ color: 'rgb(196, 48, 92)' }}>
                    <strong>StreamPulse</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button" z
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
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/popular" className="nav-link">
                                Popular
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/top_rated" className="nav-link">
                                Top Rated
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movies/upcoming" className="nav-link">
                                Upcoming
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="myList" className="nav-link">
                                My List
                            </Link>
                        </li>
                    </ul>
                    <Link to="/signup" className="nav-button">
                        Create an Account
                    </Link>
                    <Link to="/login" className="nav-button">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header