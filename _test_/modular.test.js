'use strict';

// caps test 

const events = require('../modular/event');
require('../caps');

const order = {
  storeName: 'my store',
  orderId: '789456',
  customerName: 'costomer-789456',
  address: 'nowhere',
};

console.log = jest.fn();
it('Pickup log', () => {
  events.emit('pickup', order);
  expect(console.log).toHaveBeenLastCalledWith('EVENT LOG', expect.objectContaining({ event: 'pickup' }));
});

it('in-transit log', () => {
  events.emit('in-transit', order);
  expect(console.log).toHaveBeenLastCalledWith('EVENT LOG', expect.objectContaining({ event: 'in-transit' }));
});

it('Delivered log ', () => {
  events.emit('delivered', order);
  expect(console.log).toHaveBeenLastCalledWith('EVENT LOG',expect.objectContaining({ event: 'delivered' }));
});

