import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate if the email and password fields are not empty
    if (!email || !password) {
      setLoginError('Please fill all the fields.');
      return;
    }

    const userData = { email, password };

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          setLoginSuccess(true); // Set login success flag
          setLoginError(''); // Clear any previous login error
          return response.text();
        } else {
          setLoginSuccess(false); // Reset login success flag
          setLoginError('Incorrect email or password.'); // Set error message
          throw new Error('Login failed.');
        }
      })
      .then((data) => {
        console.log(data); // Login successful
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
              <h4>Login</h4>
              <p className="text-muted">Please enter your username and password!</p>
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
              <a className="forgot text-muted" href="forgot-password.html">
                Forgot password?
              </a>
              <a className="forgot text-muted" href="signup.html">
                Don't have an account? Signup
              </a>
              <input type="submit" value="Login" />
              {loginError && <p className="error-message">{loginError}</p>}
              {loginSuccess && <p className="success-message">Login successful!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
