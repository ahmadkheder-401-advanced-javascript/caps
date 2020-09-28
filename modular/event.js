'use strict';

const events = require('events');

const newEvents = new events();

// events.on('pickup',payload => console.log(payload));
// events.on('delivered',payload => console.log(payload));
// I am exporting the same instance
// same events pool is exported
module.exports = newEvents;