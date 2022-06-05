import React, {useState} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`
  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
