import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import PetaRisikoPage from './pages/PetaRisikoPage';
import LaporanPage from './pages/LaporanPage';
import EdukasiPage from './pages/EdukasiPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/peta-risiko" element={<PetaRisikoPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
        <Route path="/edukasi" element={<EdukasiPage />} />
      </Routes>
    </Router>
  );
};

export default App;
