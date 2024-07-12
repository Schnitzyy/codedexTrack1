import React, { useEffect } from 'react';

const ReservationPage = () => {
  useEffect(() => {
    window.location.href = 'https://your-reservation-url.com';
  }, []);

  return (
    <div>
      <p>Redirecting to the reservation page...</p>
    </div>
  );
};

export default ReservationPage;
