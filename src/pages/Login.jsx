import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import io from "socket.io-client";

const socket = io("http://localhost:3000/login");
socket.on("login", (data) => {
  console.log("Recibo todos los datos que son: ");
  console.log(data)
});;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var raw = JSON.stringify({
      "email": email,
      "password": password
    });

    console.log(email, password)
    console.log(raw)
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw,
      redirect: 'follow'
    })
      .catch(error => console.error(error));
  }

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
        <p><Link to="/register">¿Aún no tiene una cuenta? Cree una aquí</Link></p>
      </form>
    </div>
  );
}

export default Login;