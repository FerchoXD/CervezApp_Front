import React from 'react';

function Header(){
    return(
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
            <img class="navbar-brand" src="public/images/FINAL.PNG" width="140px"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <b><li class="nav-item">
            <a class="nav-link" href="#">Sobre nosotros</a>
          </li></b>
          <b><li class="nav-item">
            <a class="nav-link" href="#">Registrese</a>
          </li></b>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
  }

  export default Header