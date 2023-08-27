import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
<<<<<<< HEAD
=======
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
>>>>>>> 38fe21e (Add About Route.)
        <p>Alexander, Aisha, Jalal</p>
        <h2>Delete it ALL</h2>
        <p>Hopefully this pushes</p>
      </div>
    </>
  );
}

export default App;
