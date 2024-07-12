import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <button
        className="button big-button events-button"
        onClick={() => navigate('/events')}
      >
        Events
      </button>
      <div className="top-buttons">
        <button
          className="button wide-button menu-button"
          onClick={() => navigate('/menu')}
        >
          Menu
        </button>
        <button
          className="button wide-button reservation-button"
          onClick={() => navigate('/reservation')}
        >
          Reservation
        </button>
      </div>
      <button
        className="button small-button about-button"
        onClick={() => navigate('/about')}
      >
        About Us
      </button>
    </div>
  );
};

export default LandingPage;
