import { useAppContext } from "../context/AppContext"; 
// import './cardstyle1.css'
import './cardstyle2.css'
function WeatherCard() {
  const { city, weather } = useAppContext();

  if (!weather) {
    return <div className="placeholder"></div>;
  }

  const {
    temperature,
    windspeed,
    winddirection,
    weathercode,
  } = weather;

  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    80: "Rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
  };

  return (
    <div className="weathercard">
        <div className="cloud"></div>
      <h1 style={{fontSize:"2.5em"}}>{city}</h1>
      <p className="condition">{weatherDescriptions[weathercode] || "Unknown"}</p>
      <h3>{temperature}°C</h3>
      {/* <p>High: {tempMax}°C | Low: {tempMin}°C</p> */}
      {/* <p>Humidity: {humidity}%</p> */}
      <p>Wind: {windspeed} km/h ({winddirection}°)</p>
      {/* <p>Sunrise: {sunrise}</p> */}
      {/* <p>Sunset: {sunset}</p> */}
    </div>
  );
}

export default WeatherCard;
