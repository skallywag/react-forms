import React from "react";
import Joke from "../RandomJoke-component/Joke";
import useWeatherApi from "../WeatherApi-component/WeatherApi";
import "./Header.css";

const Header = () => {
  const { handleSearch, cityInfo, zipCode, setZipCode } = useWeatherApi();

  return (
    <div className="head-con">
      <h1>Weather App</h1>
      <h2>enter a U.S zipcode</h2>
      <input
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="zipcode"
        type="text"
        value={zipCode}
      />
      <button type="submit" onClick={() => handleSearch()}>
        Search
      </button>

      {cityInfo ? (
        <h1>
          the temp in {cityInfo.name} is {cityInfo.temp} degrees
        </h1>
      ) : null}
    </div>
  );
};

export default Header;
