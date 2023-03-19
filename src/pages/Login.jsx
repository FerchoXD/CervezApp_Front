import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="register-container">
      <form className="register-form">
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Submit</button>
        <p><Link to="/register">¿Aún no tiene una cuenta? Cree una aquí</Link></p>
      </form>
    </div>
  );
}

export default Login;