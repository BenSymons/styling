import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Traditional from "./components/Traditional";
import Modules from "./components/Modules";
import StyledComps from "./components/StyledComps";

function App() {
  return (
    <div className="App">
      <img 
        src="/pokeball.png" 
        alt="pokeball"
        className="pokeball"
      />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Traditional />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/styled_components" element={<StyledComps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
