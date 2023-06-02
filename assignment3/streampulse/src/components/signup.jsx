import React, { useState } from 'react';
import '../css/signup.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the email and password
    const userData = { email, password };

    // Send a POST request to your Node.js server
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // User registered successfully
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box" id="form" onSubmit={handleSubmit}>
              <h4>Create an Account</h4>
              <p className="text-muted">Please enter your details</p>
              <input
                type="text"
                name="Fname"
                id="Fname-input"
                placeholder="First Name"
              />
              <input
                type="text"
                id="Lname-input"
                name="Lname"
                placeholder="Last Name"
              />
              <input
                type="text"
                name="email"
                id="email-input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                id="password-input"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <a className="forgot text-muted" href="login.html">
                Already have an account? Login
              </a>
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
