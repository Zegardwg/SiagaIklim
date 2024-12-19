import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h2 className="title">REGISTER</h2>
      <form className="form">
        <input type="text" placeholder="Full Name" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input type="password" placeholder="Confirm Password" className="input" />
        <button className="button">SIGNUP</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
