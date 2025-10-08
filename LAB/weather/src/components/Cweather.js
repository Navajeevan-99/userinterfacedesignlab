import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const apiKey = "YOUR_API_KEY"; // 🔑 put your WeatherAPI key here
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🌦️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.location.name}, {weather.location.country}</h3>
          <p>🌡️ Temperature: {weather.current.temp_c} °C</p>
          <p>🌤️ Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>💨 Wind: {weather.current.wind_kph} kph</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
