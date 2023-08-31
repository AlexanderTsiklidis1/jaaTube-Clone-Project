import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
<<<<<<< HEAD
import About from "./About";
=======
<<<<<<< HEAD
<<<<<<< HEAD
import "./components/about/About";
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> f557b07 (Install additional dependancies.)
import About from "./About";
>>>>>>> 38fe21e (Add About Route.)
>>>>>>> main

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
<<<<<<< HEAD
=======
>>>>>>> 38fe21e (Add About Route.)
>>>>>>> main
        <p>Alexander, Aisha, Jalal</p>
        <h2>Delete it ALL</h2>
        <p>Hopefully this pushes</p>
      </div>
    </>
  );
}

export default App;
