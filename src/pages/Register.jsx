import React, { useState } from 'react';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    socket.emit('newRegister', data); // Envia el mensaje de registro al servidor
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Regístrese</h2>
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