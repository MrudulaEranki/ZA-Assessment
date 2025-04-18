import React, { useState } from 'react';
import axios from 'axios';


const SignIn = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     const res = await fetch('http://localhost:5000/api/auth/signin', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });
//     const data = await res.json();
//     console.log(data);
//   };
const handleSignIn = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signin', {
      email,
      password,
    });

    alert('Signed in successfully!');
    console.log(response.data);
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Sign-in failed!');
  }
}

  return (
    <div className="form-box">
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <p>
        No account? <span className="link" onClick={onSwitch}>Create account</span>
      </p>
    </div>
  );
}

export default SignIn;
