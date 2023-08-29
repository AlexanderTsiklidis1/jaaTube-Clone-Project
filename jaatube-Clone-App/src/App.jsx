import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
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
