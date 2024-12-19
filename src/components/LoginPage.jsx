import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2 className="title">LOGIN</h2>
      <form className="form">
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="button">LOGIN</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default LoginPage;
