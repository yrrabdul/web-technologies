import React from 'react';
import '../css/login.css';

const LoginForm = () => {
  const validateForm = () => {
    // Implement your form validation logic here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box" id="form">
              <h4>Login</h4>
              <p className="text-muted">Please enter your username and password!</p>
              <input type="text" name="email" id="email-input" placeholder="Email" />
              <input type="password" id="password-input" name="password" placeholder="Password" />
              <a className="forgot text-muted" href="forgot-password.html">Forgot password?</a>
              <a className="forgot text-muted" href="signup.html">Don't have an account? Signup</a>
              <input type="button" value="Login" onClick={validateForm} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
