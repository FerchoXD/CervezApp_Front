import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/login');
socket.on('login', (data) => {
  console.log('Recibo todos los datos que son: ');
  console.log(data);
});

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    if (loggedIn) {
      window.location.href = '/';
    }
  }, [loggedIn]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const raw = JSON.stringify({
      email: email,
      password: password,
    });

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: raw,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsLoggedIn(true); // No olvides actualizar el estado de App
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
      } else {
        // Manejar el error de inicio de sesión aquí
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Submit</button>
        <p>
          <a href="/register">¿Aún no tiene una cuenta? Cree una aquí</a>
        </p>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
