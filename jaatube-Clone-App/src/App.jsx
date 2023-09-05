import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/common/Nav";
import "./App.css";
import Home from "./Components/home/Home";

import About from "./Components/about/About";

function App() {
  return (
    <>
      <div className= "wrapper">
        <Router>
          <Nav />
          <Home/>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
