'use strict';

// Calendar is a class in FullCalendar.. variable/object thing.
console.log(FullCalendar);
let Calendar = FullCalendar.Calendar;

// Event listener that waits until page is loaded to initialize calendar
document.addEventListener('DOMContentLoaded', function() {
  // this variable connects to the calendar container in the html
  // stands for calendar ELEMENT!
  var calendarEl = document.getElementById('calendar');
  // create calendar object. param: <var connected to html, object about options>.
  let calendar = new Calendar(calendarEl, {

    // this is an object with objects inside it.
    headerToolbar: { center: 'dayGridMonth,timeGridWeek' }, // buttons for switching between views

    initialView: 'dayGridMonth',

    views: {
      dayGridMonth: { // name of view
        titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
        // other view-specific options here
      }
    }

  });
  // needed to actually show the calendar i guess.
  calendar.render();
});

