import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext"; 

async function findWeather(cityname, setCity, setWeather) { 
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityname)}`
    );
    const geoData = await geoRes.json();
    // console.log(geoData);
    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found!");
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    // console.log(weatherData);
    setCity(name);
    setWeather(weatherData.current_weather);
    

  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Failed to fetch weather data!");
  }
}

function Searchbar() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const { setCity, setWeather } = useAppContext(); 
  const {weather: weatherapi} = useAppContext(); //1
  useEffect(() => {
  console.log("Weather updated:", weatherapi);
  }, [weatherapi]);

  useEffect(() => {
    const handleClick = () => {
      const value = inputRef.current?.value.trim();
      if (value) {
        findWeather(value, setCity, setWeather); 
      } else {
        alert("Please enter a city name");
      }
    };

    const button = buttonRef.current;
    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [setCity, setWeather]);

  return (
    <div className="search-bar">
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter City Name"
        className="searchinput"
      />
      <button ref={buttonRef} className="searchbutton">Search</button>
    </div>
  );
}

export default Searchbar;
