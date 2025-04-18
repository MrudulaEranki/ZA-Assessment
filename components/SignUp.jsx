import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const handleSignUp = async () => {
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', {
      username,
      email,
      password,
    });

    alert('Account created!');
    console.log(response.data.message);
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Sign-up failed!');
  }
}

  return (
    <div className="form-box">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
      <button onClick={handleSignUp}>Create Account</button>
      <p>
        Already have an account? <span className="link" onClick={onSwitch}>Sign in</span>
      </p>
    </div>
  );
};

export default SignUp;
