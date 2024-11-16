import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom'

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    try {
      await API.post('/auth/user', { username, password });
      alert('Registration successful! Please log in.');
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={(e) => {navigate('/')}}>Login</button>
    </form>
  );
};

export default SignupForm;
