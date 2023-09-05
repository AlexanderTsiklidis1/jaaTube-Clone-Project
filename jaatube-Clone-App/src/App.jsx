import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/common/Nav";
import "./App.css";
import Home from "./Components/home/Home";

import About from "./Components/about/About";

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

        
        <h2>JAATube</h2>
        <p>Our YouTube Clone APP</p>
      </div>
    </>
  );
}

export default App;
