import React from "react";
// import Navbar from "./components/Nav-bar-component/Navbar";
import "./reset.css";
import Navbar from "./components/Nav-bar-component/Navbar";
import Header from "./components/Header-component/Header";
import Footer from "./components/Footer-component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
