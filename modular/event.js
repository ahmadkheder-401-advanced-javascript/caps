'use strict';

const Events = require('events');

const newEvents = new Events();

// events.on('pickup',payload => console.log(payload));
// events.on('delivered',payload => console.log(payload));
// I am exporting the same instance
// same events pool is exported
module.exports = newEvents;
