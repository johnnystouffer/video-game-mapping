import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { validateEmail } from '../util/validate';
import { loginUser } from '../services/login';

const LogIn = () => {

  const nav = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || password.length < 8 || password.length > 25) {
      setError("Please enter a valid email and a password with a length between 8-25");
      return;
    }
    setLoading(true);
    try {
      await loginUser(email, password);
    } catch (e) {
      setLoading(false);
      setError("This email and password is invalid, please try again");
      return;
    }
    setLoading(false);
    nav('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Log In</h2>
        <form id='email-password-form' onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email}
           onChange={(e) => {setEmail(e.target.value)}} required />
          <input type="password" placeholder="Password" value={password}
          onChange={(e) => {setPassword(e.target.value)}} required />
          <button id='sign-up-button'>Submit</button>
        </form>
        <Link to='/auth/signup'>
          <p className="toggle-link">Don't have an account? Sign up</p>
        </Link>
       {error && <p className='error-message'>{error}</p>}
       {isLoading && <p id='loading'>Loading...</p>}
      </div>
    </div>
  );
};

export default LogIn;
