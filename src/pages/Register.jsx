import React from 'react';
import '../styles/register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Regístrese</h2>
        <div className="form-control">
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Enviar</button>
        <p><Link to="/login">¿Ya tiene una cuenta? Ingrese aquí</Link></p>
      </form>
    </div>
  );
}

export default Register;