'use strict'
const events = require('./event');
const vendors = require('./vendor');


events.emit('pickup', pickedupHandler(vendors));

function pickedupHandler(vendors) {
    setTimeout(() => {
    console.log(`DRIVER: picked up ${vendors.fakeOrder.orderId}`)
    events.emit('in-transit', vendors.fakeOrder);
    setTimeout(() => {
        console.log('delivered');
        events.emit('delivered', payload);
    }, 3000)
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

