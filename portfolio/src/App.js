import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Home />
      {/* <Router basename="/portfolio"> */}
        {/* <Header /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        {/* <Footer /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
