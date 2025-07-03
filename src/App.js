import './App.css';
import Coin from "./Pages/Coin";
import Compare from "./Pages/Compare";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='app'>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
