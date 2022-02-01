import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [zipCode, setZipCode] = useState("");
  const [tempF, setTempF] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const handleChange = (value) => {
    setZipCode(value);
  };

  const submitHandler = (zipCode) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=77781fb0f0734297b2603939211512&q=${zipCode}&aqi=no`
      )
      .then((res) => {
        let data = res;
        setData(data);
        const city = data.location.name;
        const tempF = data.current.temp_f;
        setTempF(tempF);
        setCity(city);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <h2>enter a U.S zipcode</h2>
      <input
        onChange={(e) => handleChange(e.target.value)}
        placeholder="zipcode"
        type="text"
        value={zipCode}
      />
      <button type="submit" onClick={() => submitHandler(zipCode)}>
        Search
      </button>
      {tempF ? (
        <h1>
          the temp in {city} is {tempF} degrees
        </h1>
      ) : null}
    </div>
  );
};

export default Header;
