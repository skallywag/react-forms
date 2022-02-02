import React from "react";
import Joke from "../components/RandomJoke-component/Joke";
import Header from "../components/Header-component/Header";
import Counter from "../components/Counter-component/Counter";
import Todo from "../components/Todo-component/Todo";

const Home = () => {
  return (
    <div>
      <Joke />
      <Header />
      <Todo />
      <Counter />
    </div>
  );
};

export default Home;
