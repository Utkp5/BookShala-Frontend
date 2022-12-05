import React from "react";
import { Browserrouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
