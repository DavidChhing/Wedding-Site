import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nav bar</h1>

      <section className="landing-page-image-section">
        <img
          src={require('../assets/black-and-white-photo.jpg')}
          className="landing-page-image"
          alt="black and white of David and Taylor"
        />
        <h2 className="name-section">
          <span className="name-styling">David & Taylor</span>
        </h2>

        <h2 className="date-section">
          <span className="date">6.20.20</span>
        </h2>
      </section>
    </div>
  );
}

export default App;
