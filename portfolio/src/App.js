import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Router> 
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
       </Router>
    </div>
  );
}

export default App;
