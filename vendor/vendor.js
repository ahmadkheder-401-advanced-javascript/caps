'use strict';


var faker = require('faker');

const net = require('net');
const host =  process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const client = new net.Socket();

client.connect(port, host, ()=> {
  console.log('Vendore is connected to Server! ..');
});

client.on('data', function(data) {
  let msg = JSON.parse(data);
  if(msg.event === 'delivered'){
    console.log(`thank you for delivering ${msg.payload.orderId}`);
  }
});


let i = 5;
while (i) {
  setTimeout(() => {
    let order = {
      storeName: faker.company.companyName(),
      orderId: faker.random.number(),
      customerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: `${faker.address.city()}-${faker.address.country()}`
    };
    sendMessageToServer('pickup', order);
  }, i * 1000);
  i--;
}


function sendMessageToServer(event, payload) {
  const msg = JSON.stringify({event: event, payload: payload});
  client.write(msg);
}

