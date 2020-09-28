'use strict';

const faker = require('faker');
const events = require('./event');
require('dotenv').config();

require('../caps');
require('./driver');
let store_name = process.env.STORE_NAME;

function fakeOrderGenerator() {
    // setTimeout(()=>{}, 5000)
    let fakeOrder = {
        storeName: faker.company.companyName(),
        orderId: faker.random.number(),
        customerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.city()}-${faker.address.country()}`
    };
    return fakeOrder;

}

let i = 10;
let triggerOrders = () => {
    let fakerOrder ;
    while (i) {
         fakerOrder = setTimeout(fakeOrderGenerator, 5000);
        events.emit('pickup', fakerOrder);
        i--;
    }
    return fakeOrder;

};
triggerOrders();

events.emit('delivered', deliveredHandling);
function deliveredHandling() {
    console.log('thank you');
}
module.exports = triggerOrders;
/*

vendor.js - Vendor Module

    Declare your store name (perhaps in a .env file, so that this module is re-usable)XXXXXXXX
    Every 5 seconds, simulate a new customer order
        Create a fake order, as an object:
            storeName, orderId, customerName, addressxxxxxxxxxxxxxxxxxxxxxx

        Emit a ‘pickup’ event and attach the fake order as payloadxxxxxxxxxx
            HINT: Have some fun by using the faker library to make up phony information
    Monitor the system for events …
        Whenever the ‘delivered’ event occurs
            Log “thank you” to the console


*/