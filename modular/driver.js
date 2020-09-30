'use strict';
const Events = require('./event');
const Vendors = require('./vendor');


Events.emit('pickup', pickedupHandler(Vendors));

function pickedupHandler(vendors) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${vendors.fakeOrder.orderId}`);
    Events.emit('in-transit', vendors.fakeOrder);
    setTimeout(() => {
      console.log('delivered');
      // eslint-disable-next-line no-undef
      Events.emit('delivered', payload);
    }, 3000);
  }, 1000);
}



/*

driver.js - Drivers Module

    Monitor the system for events …
    On the ‘pickup’ event …
        Wait 1 second
            Log “DRIVER: picked up [ORDER_ID]” to the console.
            Emit an ‘in-transit’ event with the payload you received
        Wait 3 seconds
            Log “delivered” to the console
            Emit a ‘delivered’ event with the same payload


*/

