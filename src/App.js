import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import ReservationPage from './components/ReservationPage';
import EventsPage from './components/EventsPage';
import AboutUsPage from './components/AboutUsPage';
import './styles/global.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  </Router>
);

export default App;
