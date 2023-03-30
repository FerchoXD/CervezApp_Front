import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
const socket = io('http://localhost:3000/searchProduct');

socket.on('searchProduct', (data) => {
  searchProduct(data);
})

function searchProduct(data){
  const navigate = useNavigate();
  console.log("Soy de la function para el socket")
  if(data[0] !== undefined || data[0] !== null){
    console.log(data[0]);
    navigate('/card', { state: { ...data[0] } });
  }
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm)
    const handleSearch = async () => {
      let name = searchTerm.split(' ')[0]
      let brand = searchTerm.split(' ')[1]
      console.log(name, brand)
    const marin = localStorage.getItem('marin'); // Cambiado aquí
    if (!marin) {
      // No hay token, manejar el error aquí
      console.error('No hay token disponible');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/product/search?name=${name}&brand=${brand}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${marin}`
        },
      });
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <header>
      {/* ...resto del código... */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar producto"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </header>
  );
}




function Header({ isLoggedIn, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const [showError, setShowError] = useState(false);


  const handleErrorClose = () => {
    setShowError(false);
  };


  return (
    <nav className="navbar navbar-expand-lg">
      {showError && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          No se encontraron productos con el término de búsqueda.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleErrorClose}></button>
        </div>
      )}
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-brand" src="images/FINAL.PNG" width="140px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <b>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Sobre Nosotros
                </Link>
              </li>
            </b>
            <b>
              <li className="nav-item">
                {!isLoggedIn ? (
                  <Link className="nav-link" to="/register">
                    Regístrese
                  </Link>
                ) : (
                  <a className="nav-link" href="#" onClick={onLogout}>
                    Cerrar sesión
                  </a>
                )}
              </li>
            </b>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Header;