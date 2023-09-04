import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/common/Nav";
import "./App.css";

import About from "./Components/about/About";


function App() {

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

        <p>Alexander, Aisha, Jalal</p>
        <h2>Delete it ALL</h2>
        <p>Hopefully this pushes</p>
      </div>
    </>
  );
}

export default App;
