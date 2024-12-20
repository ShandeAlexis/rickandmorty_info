// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Personajes } from '../pages/Personajes';
import { Navbar } from '../components/Navbar/Navbar';
import Capitulos from '../pages/Capitulos';
import Ubicaciones from '../pages/Ubicaciones';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/capitulos" element={<Capitulos />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />

      
      </Routes>
    </Router>
  );
};

export default AppRouter;
