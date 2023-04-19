import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Header /> */}
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
