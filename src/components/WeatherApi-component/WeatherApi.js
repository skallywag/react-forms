import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherApi = () => {
  const [cityInfo, setCityInfo] = useState();
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (cityInfo) {
      setZipCode("");
    }
  }, [cityInfo]);

  const handleSearch = async () => {
    try {
      const {
        data: {
          location: { name },
          current: { temp_f: temp },
        },
      } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=77781fb0f0734297b2603939211512&q=${zipCode}&aqi=no`
      );
      setCityInfo({ name, temp });
    } catch {
      alert("invalid zipcode idiot");
    }
  };
  return { handleSearch, cityInfo, zipCode, setZipCode };
};

export default useWeatherApi;
