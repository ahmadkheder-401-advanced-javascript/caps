'use strict';

const net = require('net');
//run the server
const server = net.createServer();
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`server is running on ${port}`));

//Creates a pool of connected clients
let connectionPool = {};

//Accept inbound TCP connections on a declared port
server.on('connection', (socket) => {
  const id = `Socket-${Math.floor(Math.random() * 100000)}`;
  //On new connections, add the client to the connection pool
  connectionPool[id] = socket;

  socket.on('data', (buffer) => {
    // parse buffer
    let msg = JSON.parse(buffer.toString());
    if(!(msg.event && msg.payload)){
      throw new Error('invalid data');
    }
    console.log('EVENT >>>', msg);
    console.log('---------for delete------------------------');
    broadcast(msg);
  });

  server.on('error', (e)=> {
    console.log('ERROR !!!!!!! ', e);
  });

  server.on('close', () => {
    delete connectionPool[id];
  });
});

function broadcast(msg) {
  let payload = JSON.stringify(msg);
  for (let id in connectionPool) {
    connectionPool[id].write(payload);
  }
}
