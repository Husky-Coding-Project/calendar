// Import may not be working properly because there's no name
// assigned to this module.  I don't know where the module name is
// used in the code.
import './node_modules/fullcalendar/index.global.js';

// This eventListener just waits until the page is loaded to
// initialize the calendar.
document.addEventListener('DOMContentLoaded', function() {
  // Creates variable connected to the "calendar" div in the HTML. This var
  // could be an object.
  var calendarEl = document.getElementById('calendar');
  // Initialize calendar object to show calendar in HTML.
  // Parameters of this method (?): <variable connected to the HTML container, and an
  // object of options>
  var calendar = new FullCalendar.Calendar(calendarEl, {

    // yes these are objects within the object to specify options
    headerToolbar: { center: 'dayGridMonth,timeGridWeek' }, // buttons for switching between views
    views: {
      dayGridMonth: { // name of view
        titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
        // other view-specific options here
      }
    }

  });
  calendar.render();
});

