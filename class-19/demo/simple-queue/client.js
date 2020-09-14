'use strict';

const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000');

// socket.emit('getall');

socket.on('hello-greeting', payload => {
  console.log('heard', payload.message);
  socket.emit('received', payload);
});
