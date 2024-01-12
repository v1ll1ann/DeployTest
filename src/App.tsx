import React, { useState } from 'react';
let React;
import './App.css'

function App() {
  const [email, setEmail] = useState(''); // added semicolon here
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // handle login logic here
  }

  return (
    <div className="App">
      <header className="App-header" style={{ position: 'fixed' }}>
        <nav>
          <button>home</button>
          <button>Login</button>
          <button>Register</button>
        </nav>
      </header>
      <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password : </label>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </form>
          <div className="forgot-password">
            <button type="button" ><span style={{color:'black',textDecoration: 'underline'}}>Forgot Password ?</span></button>
          </div>
          <div className="login">
            <button type="submit">Login</button>
          </div>

      </div>
    </div>
  )
}

export default App
