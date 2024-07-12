import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/EventsPage.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Modern Horizons 3 Pre-release',
    start: new Date(2024, 5, 7, 18, 0),
    end: new Date(2024, 5, 7, 21, 0),
    desc: 'Join us for the Modern Horizons 3 pre-release event!',
    link: 'https://square.link/u/RmvUCh2J',
  },
  {
    title: 'Modern Horizons 3 Pre-release',
    start: new Date(2024, 5, 8, 11, 0),
    end: new Date(2024, 5, 8, 14, 0),
    desc: 'Second day of the Modern Horizons 3 pre-release!',
    link: 'https://square.link/u/qzq0q6Fq',
  },
  // Add more events here
];

const Event = ({ event }) => (
  <span>
    <strong>{event.title}</strong>
    {event.desc && ': ' + event.desc}
    {event.link && (
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Register here
      </a>
    )}
  </span>
);

const EventsPage = () => {
  return (
    <div className="events-page">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{ event: Event }}
      />
    </div>
  );
};

export default EventsPage;
