import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';
import { signUpUser } from '../services/login';
import { validateEmail } from '../util/validate';

const AuthPage = () => {  
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || password.length < 8 || password.length < 25) {
      setError("Please enter a valid email and a password wight a length between 8-25");
    }
    try {
      await signUpUser(username, email, password);
      // TODO: redirect to home/dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form id="email-password-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" required />
          <button id="sign-up-button">Submit</button>
        </form>
        {/* <button id="google-button" onClick={handleGoogleLogin}>
          Continue with <img id='logo' src='/assets/googlelogo.png'></img>
        </button> */}
        <Link to="/auth/login">
          <p className="toggle-link">Already have an account? Log in</p>
        </Link>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default AuthPage;
