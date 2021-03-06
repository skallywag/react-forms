import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import MoreApps from "./Pages/MoreApps";
import Navbar from "./components/Nav-bar-component/Navbar";
import Movies from "./Pages/Movies";
import "./reset.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/MoreApps" element={<MoreApps />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
