import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bejelentkezes } from "./Bejelentkezes";
import { SzallasLista } from "./SzallasLista";
import { SzallasSingle } from "./SzallasSingle";

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/bejelentkezes"  element={<Bejelentkezes />} />
        <Route path="/osszes-szallas"  element={<SzallasLista />} />
        <Route path="/szallas/:szallasId"  element={<SzallasSingle />} />
        <Route path="*" element={<Bejelentkezes/>} />
      </Routes>
    </Router>
  );
}

export default App;