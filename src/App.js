import React from 'react';
import './App.css';
import menuImage from './my-image/menu1.jpg'; 
import menuImage2 from './my-image/menu2.jpg';
import menuImage3 from './my-image/menu3.jpg';
import menuImage4 from './my-image/menu4.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#pizza-house">Pizza House</a>
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      
      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={menuImage} className="d-block w-100" alt="Menu 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Napolitan Pizza</h5>
              <p>If you are looking for traditional Italian pizza, the Napolitan is the best option.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={menuImage2} className="d-block w-100" alt="Menu 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Napolitan Pizza</h5>
              <p>If you are looking for traditional Italian pizza, the Napolitan is the best option.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={menuImage3} className="d-block w-100" alt="Menu 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Napolitan Pizza</h5>
              <p>If you are looking for traditional Italian pizza, the Napolitan is the best option.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={menuImage4} className="d-block w-100" alt="Menu 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Napolitan Pizza</h5>
              <p>If you are looking for traditional Italian pizza, the Napolitan is the best option.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
