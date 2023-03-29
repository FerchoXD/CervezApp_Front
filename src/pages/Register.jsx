import React, { useState, useEffect } from 'react';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/register');
socket.on('newRegister', (data) => {
  console.log('Recibo todos los datos que son: ');
  console.log(data);
});

function Register({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const raw = JSON.stringify({
      name: username,
      email: email,
      password: password,
    });

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: raw,
        redirect: 'follow',
      });
      if (response.ok) {
        setRegistrationMessage('Cuenta creada exitosamente. Redirigiendo a la página de inicio de sesión...');
        setIsRegistered(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    }
  }, [isRegistered]);

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Regístrese</h2>
        {error && <p className="error-message">{error}</p>}
        {isRegistered && <p className="success-message">{registrationMessage}</p>}
        <div className="form-control">
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
        <p>
          <Link to="/login">¿Ya tiene una cuenta? Ingrese aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;