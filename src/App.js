import React from "react";
// import Navbar from "./components/Nav-bar-component/Navbar";
import "./reset.css";
import Navbar from "./components/Nav-bar-component/Navbar";
import Header from "./components/Header-component/Header";
// import Footer from "./components/Footer-component/Footer";
import Counter from "./components/Counter-component/Counter";
import Joke from "./components/RandomJoke-component/Joke";
import Todo from "./components/Todo-component/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Joke />
      <Header />
      <Counter />
      <Todo />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
