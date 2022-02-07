import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import movieDb from "../moviedb/movieDb";

console.log(movieDb);

// const apiKey = "644fb1f8";

const Movies = () => {
  // const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   axios.get("http://www.omdbapi.com/?apikey=644fb1f8&s=movie").then((res) => {
  //     const movies = res.data.Search.JSON();
  //     setMovieList([...movieList, movies]);
  //     console.log(movieList);
  //   });
  // }, []);

  return (
    <div>
      <h1>Popular movies right now</h1>
      {movieDb.map((movie, idx) => {
        return <MovieList key={idx} movie={movie}></MovieList>;
      })}
    </div>
  );
};

export default Movies;
