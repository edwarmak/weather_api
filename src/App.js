import React, {useState} from 'react'
// import axios for api calls
import axios from 'axios'
// access API KEY from .env file
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  // below is the API url with API KEY inserted from .env file in order to push to github without publically displaying API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7752019968c8320d3bb24be46f2a1e94`
  // search function to change location state upon search
  const searchLocation = (event) => {
    // wrap api call in IF statement to submit input on 'Enter'
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
    }
  }
  
  return (
    <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

      {data.name != undefined &&
        <div className="bottom">
        <div className="feels">
           {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
           <p>Feels Like</p>
         </div>
         <div className="humidity">
           {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
           <p>Humidity</p>
         </div>
         <div className="wind">
           {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
           <p>Wind Speed</p>
         </div>
       </div>
      }
      </div>
    </div>
  );
}

export default App;
