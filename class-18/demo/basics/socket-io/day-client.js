'use strict';

const ioClient = require('socket.io-client');

const socket = ioClient.connect('http://localhost:3000');


// What code will trigger server to log...
// console.log('received sunrise message', payload);

<<<<<<< HEAD
// socket.on take a string of event name and a function, the function takes a payload
socket.on('sunrise', payload => {
  console.log('Oh what a beautiful morning', payload);
})
=======


















// Generic client
// Doesn't connect to a namespace or join any rooms
// Hears any and all 'emit' events from the server
// But only cares about a couple of them.

/*
socket.on('sunrise', (payload) => {
  console.log('Get ready for work!');
});

socket.on('sunset', (payload) => {
  console.log('Go to bed...');
});

// To prove this, we can wire up a event listener meant for a room in a namespace
socket.on('fire', (payload) => {
  console.log('RUN FOR YOUR LIFE!')
});
*/


>>>>>>> f894aa4ef32f494629ba609d0c5ccb1291f50502
