import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import io from 'socket.io-client';
const socket = io('http://localhost:3000/login');

function testLocalStorage() {
  // Guardar un valor en localStorage
  localStorage.setItem('mensaje', 'Hola desde localStorage');

  // Recuperar el valor de localStorage
  const mensaje = localStorage.getItem('mensaje');

  // Imprimir el valor en la consola
  console.log(mensaje);
}

socket.on('login', (data) => {
  //console.log('Recibo todos los datos que son: ');
  try {
    // Verificamos si data ya es un objeto, de lo contrario lo parseamos
    let response = typeof data === "object" ? data : JSON.parse(data);
    // console.log('Respuesta:', JSON.stringify(response, null, 2));

    // Accedemos a las propiedades "status" y "token" a través del objeto "User"
    if(response.User.status === 200){
      console.log('Entro');
      let token = response.User.token
      //console.log(token);
      //localStorage.setItem('token', token);
      prueba(data)
    }
  } catch (error) {
    console.error('Error al analizar el JSON: ', error);
  }
});

function prueba(data) {
  console.log("Function prueba")
  console.log(data.User.token);
  localStorage.setItem('marin', data.User.token);
  //socket.emit('login', data);
}

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');


  // useEffect(() => {
  //   if (loggedIn) {
  //     window.location.href = '/';
  //   }
  // }, [loggedIn]);

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
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
      } else {
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
