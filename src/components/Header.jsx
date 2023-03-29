import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg">
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
                    <Link className="nav-link" to="/Login">
                      Iniciar Sesión
                    </Link>
                  ) : (
                    <a className="nav-link" href="#" onClick={onLogout}>
                      Cerrar Sesión
                    </a>
                  )}
                </li>
              </b>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
