import { globalPlugins } from './node_modules/@fullcalendar/core/index.js';
export * from './node_modules/@fullcalendar/core/index.js';
import interactionPlugin__default from './node_modules/@fullcalendar/interaction/index.js';
export * from './node_modules/@fullcalendar/interaction/index.js';
import dayGridPlugin from './node_modules/@fullcalendar/daygrid/index.js';
import timeGridPlugin from './node_modules/@fullcalendar/timegrid/index.js';
import listPlugin from './node_modules/@fullcalendar/list/index.js';

globalPlugins.push(interactionPlugin__default, dayGridPlugin, timeGridPlugin, listPlugin);
