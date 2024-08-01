import React, { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../components/event.css';

export function Events() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
      timeZone: 'PST',
      initialView: 'dayGridMonth',
      events: [{ title: 'Jungle Lights', start: new Date(2024,7,2,13) },
		{ title: 'Float Parade', start: new Date(2024,7,3,11) },
		{ title: 'Panda Exhibit Opens (Reservations Only)', start: new Date(2024,7,4,3) },
		{ title: 'Sneakers for Snakes', start: new Date(2024,7,7,5) },
		{ title: 'Jungle Lights', start: new Date(2024,7,9,13) },
		{ title: 'Float Parade', start: new Date(2024,7,10,11) },
		{ title: 'Cools-day', start: new Date(2024,7,13,5) },
		{ title: 'Cans for Cats', start: new Date(2024,7,14,5) },
		{ title: 'Jungle Lights', start: new Date(2024,7,16,13) },
		{ title: 'Float Parade', start: new Date(2024,7,17,11) },
		{ title: 'Bananas for Bananas', start: new Date(2024,7,18,5) },
		{ title: 'Zoo Closed', start: new Date(2024,7,19), allDay: true },
		{ title: 'Hats for Bats', start: new Date(2024,7,21,5) },
		{ title: 'Jungle Lights', start: new Date(2024,7,23,13) },
		{ title: 'Float Parade', start: new Date(2024,7,24,11) },
		{ title: 'Socks for Hawks', start: new Date(2024,7,28,5) },
		{ title: 'Jungle Lights', start: new Date(2024,7,30,13) },
		{ title: 'Float Parade', start: new Date(2024,7,31,11) },
	  ],
      editable: false,
      selectable: true,
      plugins: [dayGridPlugin],
    });

    calendar.render();
  }, []);

  return (
    <div id="calendar" className='cal'></div>
  );
}
