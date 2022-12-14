import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog"
import Shop from "./Components/Shop/Shop"
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart/Cart";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
