import { useState } from 'react';
import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';
import './App.css';


function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-container">
      {isSignIn ? (
        <SignIn onSwitch={() => setIsSignIn(false)} />
      ) : (
        <SignUp onSwitch={() => setIsSignIn(true)} />
      )}
    </div>
  );
}

export default App;
