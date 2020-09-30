'use strict';
var Faker = require('faker');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000/caps');

socket.on('connect', () => {
  socket.emit('join', 'vendor');
  let i = 10;
  while (i) {
    setTimeout(() => {
      let order = {
        storeName: Faker.company.companyName(),
        orderId: Faker.random.number(),
        customerName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
        address: `${Faker.address.city()}-${Faker.address.country()}`
      };
      sendMessageToServer('pickup', order);
    }, i * 1000);
    i--;
  }
  socket.on('delivered', (payload) => {
    console.log(`thank you for delivering ${payload.orderId}`);
  });
});
function sendMessageToServer(event, payload) {
  socket.emit(event, payload);
}

