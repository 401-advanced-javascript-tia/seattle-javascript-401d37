'use strict';

const ioClient = require('socket.io-client');

const socket = ioClient.connect('http://localhost:3000');


// What code will trigger server to log...
// console.log('received sunrise message', payload);

// socket.on take a string of event name and a function, the function takes a payload
socket.on('sunrise', payload => {
  console.log('Oh what a beautiful morning', payload);
})
