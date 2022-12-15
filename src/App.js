import React,{Suspense,lazy}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//instead of writing this we are using this because of loading import Home from "./Components/Home/Home"

const  Home    = lazy(() => import("./Components/Home/Home"))
const  About   = lazy(() => import("./Components/About/About"))
const  Blog    = lazy(() => import("./Components/Blog/Blog"))
const  Shop    = lazy(() => import("./Components/Shop/Shop"))
const  Contact = lazy(() => import("./Components/Contact/Contact"))
const  Cart    = lazy(() => import("./Components/Cart/Cart"))
const  Signup  = lazy(() => import("./Components/Signup/Signup"))
const  Signin  = lazy(() => import("./Components/Signin/Signin"))



function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
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
    </Suspense>
  );
}

export default App;
