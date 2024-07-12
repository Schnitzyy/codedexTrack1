import React from 'react';
import '../styles/EventsPage.css';


const events = [
  {
    date: "7/26",
    name: "Bloomburrow Pre-release 6pm",
    url: "https://square.link/u/vYewrAQG"
  },
  {
    date: "7/27",
    name: "Bloomburrow Pre-release 11am",
    url: "https://square.link/u/v0AzfRyj"
  },
  {
    date: "7/27",
    name: "Bloomburrow Pre-release 5pm",
    url: "https://square.link/u/pIcxnxZO"
  },
  {
    date: "7/29",
    name: "Bloomburrow Pre-release 6pm",
    url: "https://square.link/u/yXIMpJzp"
  }
];

const EventsPage = () => {
  React.useEffect(() => {
    document.title = "Sip n' Play - Events";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'Discover exciting events at Sip n\' Play! Check out what’s happening at our café, perfect for young adults seeking fun and community.'
      );
  }, []);

  return (
    <div className="events-page">

      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">More Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
