import { Link } from 'react-router-dom'
import './AuthPage.css';

const AuthPage = () => {  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your auth logic here
    alert(`Signing up`);
  };

  const handleGoogleLogin = () => {
    alert('Firebase Firebase, oooo fire fire fire firebase. POP, ba dum, dum dum');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form id='email-password-form' onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type='password' placeholder='Confirm Password' required></input>
          <button id='sign-up-button'><Link  to={'/'}>Submit</Link></button>
        </form>
        <button id="google-button" onClick={handleGoogleLogin}>
          Continue with <img id='logo' src='/assets/googlelogo.png'></img>
        </button>
        <Link to='/auth/login'>
          <p className="toggle-link">Already have an account? Log in</p>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
