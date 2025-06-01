import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './AuthPage.css';

const LogIn = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your auth logic here
    alert(`'Logging in`);
  };

  const handleGoogleLogin = () => {
    alert('Firebase Firebase, oooo fire fire fire firebase. POP, ba dum, dum dum');
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Log In</h2>
        <form id='email-password-form' onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button id='sign-up-button'><Link  to={'/'}>Submit</Link></button>
        </form>
        <button id="google-button" onClick={handleGoogleLogin}>
          Continue with <img id='logo' src='/assets/googlelogo.png'></img>
        </button>
        <Link to='/auth/signup'>
          <p className="toggle-link">Don't have an account? Sign up</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
