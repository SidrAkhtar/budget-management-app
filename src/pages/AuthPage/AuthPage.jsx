import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <main>
      <img className="auth-img" src="https://i.imgur.com/mgbHMc3.png" alt="Budget Icon" />
      <h1 className="Title">Budget App</h1>
      <h3 className="Sub-Title">Managing money, made simple and easy!</h3>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Sign Up' : 'Log In'}
      </button>
      { showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
    </main>
  );
}