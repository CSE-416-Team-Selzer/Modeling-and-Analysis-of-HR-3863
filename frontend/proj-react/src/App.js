import './App.css';
import HomePage from './HomePage.js';
import StatePage from './StatePage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:stateName" element={<StatePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
