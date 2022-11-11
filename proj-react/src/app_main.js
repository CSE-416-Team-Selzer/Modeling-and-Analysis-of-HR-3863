import './App.css';
import HomePage from './home_page.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatePageShell from './state_page_shell.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:stateName" element={<StatePageShell/>} />
      </Routes>
    </Router>
  );
}

export default App;
