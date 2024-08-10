import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Inicio/Main';
import Create from './components/Crearmispiratas/Crear';
import VermiPirata from './components/Tarjetapersonal/TarjetaPersonal';

const App = () => {
  return (
    <Router>
      <div className="App-container">
        <Routes>
          <Route path="/pirates" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/pirate/:_id" element={<VermiPirata />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
