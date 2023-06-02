import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="py-2 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 footer">
            <h5 style={{ color: 'gray' }}>Stream Pulse</h5>
            <p style={{ color: 'gray' }}>Our movie website is a comprehensive platform for movie enthusiasts, providing access
              to the latest movie trailers, reviews, and ratings. Whether you're looking for blockbusters, indie films, or timeless classics, our website has it all.</p>
          </div>
          <div className="col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5 style={{ color: 'gray' }}>Contact Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
