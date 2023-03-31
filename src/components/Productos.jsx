import React, { useEffect, useState } from 'react';

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get('name');
      const brand = urlParams.get('brand');

      const marin = localStorage.getItem('marin');
      if (!marin) {
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

        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const generateCarouselItems = () => {
    const itemsPerSlide = 3;
    const slides = [];

    for (let i = 0; i < products.length; i += itemsPerSlide) {
      slides.push(
        <div className={`carousel-item${i === 0 ? ' active' : ''}`}>
          <div className="row">
            {products.slice(i, i + itemsPerSlide).map((product, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <img className="img-fluid" alt="100%x280" src={product.image || 'images/FINAL.PNG'} />
                  <div className="card-body">
                    <h4 className="card-title">{product.name} {product.brand}</h4>
                    <p className="card-text">Contiene {product.size}</p>
                    <p className="card-text">Quedan {product.stock} piezas</p>
                    <p className="card-text">{product.price} Mxn</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return slides;
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-3">Productos</h3>
          </div>
          <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {generateCarouselItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="col-6 text-right">
          <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
          </a>
          <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </center>
    </section>
  );
}

export default Productos;