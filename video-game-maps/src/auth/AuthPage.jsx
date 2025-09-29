import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { signUpUser } from '../services/login';
import { validateEmail } from '../util/validate';

const AuthPage = () => {
  const nav = useNavigate();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [matchingPasswords, setMatchingPasswords] = useState(false);
  const [validUsername, setValidUsername] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setValidUsername(value.length >= 8);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setValidEmail(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setValidPassword(value.length >= 8 && value.length <= 25);
    setMatchingPasswords(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setMatchingPasswords(password === value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validUsername || !validEmail || !validPassword || !matchingPasswords) {
      setError("Please ensure all requirements are satisfied before submitting.");
      return;
    }

    setLoading(true);

    try {
      await signUpUser(username, email, password);
      setLoading(false);
      nav('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div>
          <img src="" alt="" />
        </div>
        <h2>Sign Up</h2>
        <form id="email-password-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username}
            onChange={handleUsernameChange} required />
          <input type="email" placeholder="Email" value={email}
            onChange={handleEmailChange} required />
          <input type="password" placeholder="Password" value={password}
            onChange={handlePasswordChange} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword}
            onChange={handleConfirmPasswordChange} required />
          <button id="sign-up-button">Submit</button>
        </form>

        <div className="requirements-list">
          <p className={validUsername ? 'valid' : 'invalid'}>
            {validUsername ? '✓' : '✗'} Username must be at least 8 characters
          </p>
          <p className={validEmail ? 'valid' : 'invalid'}>
            {validEmail ? '✓' : '✗'} Must be a valid email
          </p>
          <p className={validPassword ? 'valid' : 'invalid'}>
            {validPassword ? '✓' : '✗'} Password must be 8–25 characters
          </p>
          <p className={matchingPasswords ? 'valid' : 'invalid'}>
            {matchingPasswords ? '✓' : '✗'} Passwords must match
          </p>
        </div>

        <Link to="/auth/login">
          <p className="toggle-link">Already have an account? Log in</p>
        </Link>
        {error && <p className="error-message">{error}</p>}
        {isLoading && <p id='loading'>Loading...</p>}
      </div>
    </div>
  );
};

export default AuthPage;
