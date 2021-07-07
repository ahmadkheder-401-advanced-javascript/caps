' use strict';
const events = require('./modular/event');


events.on('pickup', (payload) => log('pickup', payload));
events.on('in-transit', (payload) => log('in-transit', payload));
events.on('delivered', (payload) => log('delivered', payload));

function log(event, payload) {
  let time = new Date();
  console.log('EVENT LOG', { time, event, payload });
}

/* 

caps.js - Main Hub Application

    Manages the state of every package (ready for pickup, in transit, delivered, etc)
    Logs every event to the console with a timestamp and the event payload
    i.e. “EVENT {}”

    - require events.js

- state of packages: ready for pickup, in transit, delivered

- log events with timestamp and event payload as obj

*/