import React, { useEffect } from 'react';

const ReservationPage = () => {
  useEffect(() => {
    window.location.href = 'https://www.exploretock.com/sipnplay/';
  }, []);

  return (
    <div>
      <p>Redirecting to the reservation page...</p>
    </div>
  );
};

export default ReservationPage;
