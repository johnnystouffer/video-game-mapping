import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your auth logic here
    alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);
  };

  const handleGoogleLogin = () => {
    alert('Google login clicked (hook up Firebase here)');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isLogin ? null : <input type='password' placeholder='Retype Password' required></input>}
          <button id='sign-up-button'><Link  to={'/'}>{isLogin ? 'Log In' : 'Sign Up'}</Link></button>
        </form>
        <button className="google-button" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <p onClick={toggleMode} className="toggle-link">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
