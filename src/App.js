import React, {useState} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`
  
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Salt Lake City</p>
          </div>
          <div className="temp">
            <h1>65F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom"></div>
          <div className="feels">
            <p>65F</p>
          </div>
          <div className="humidity">
            <p>10%</p>
          </div>
          <div className="wind">
            <p>5 MPH</p>
          </div>
      </div>
    </div>
  );
}

export default App;
