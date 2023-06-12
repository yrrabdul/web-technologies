import React, { useState, useEffect } from 'react';
import './signup.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(
    localStorage.getItem('registrationSuccess') === 'true'
  );
  const [signupError, setSignupError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setSignupError('Please fill all the fields.');
      return;
    }

    // Create an object with the email and password
    const userData = { email, password };

    // Send a POST request to your Node.js server
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // User registered successfully
        setRegistrationSuccess(true); // Set registration success to true
        localStorage.setItem('registrationSuccess', 'true'); // Persist state in local storage
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Clear registrationSuccess state on page refresh
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('registrationSuccess');
      window.location.href = '/login';
    });
  }, []);

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
              {signupError && <p className="error">{signupError}</p>}
              {registrationSuccess && (
                <p className="success">User registered successfully!</p>
              )}
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
