import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Joke.css";

const Joke = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setJoke(res.data.value);
    });
  }, []);

  return (
    <div className="joke-con">
      <h1 className="joke-title">Chuck Norris joke of the day</h1>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
