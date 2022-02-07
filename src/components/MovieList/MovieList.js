import React from "react";
import { useEffect, useState } from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const { id, title, year, rating } = props.movie;
  return (
    <div className="movies-page">
      <div className="list-con">
        <div className="movie-card">
          <h1>{title}</h1>
          <h1>{year}</h1>
          <h1>{rating}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
