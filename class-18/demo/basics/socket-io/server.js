'use strict';

const io = require('socket.io')(process.env.PORT || 3000);

<<<<<<< HEAD
// Core Demo -- basic operations on the main socket interface
// Couple this with the "day.js" client

// when the connection occurs, run this in-line connection
=======
>>>>>>> 14a4bc22b979ad57f763c2dce166f2dac45db253
io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  // now we want to respond and manage events
  // below represents a connection between a client and this server
  socket.on('sunrise', (payload) => {
<<<<<<< HEAD
    
    //echoing back, the server overall is sending out this notification about what has happened
=======
    console.log('received sunrise message', payload);
>>>>>>> 14a4bc22b979ad57f763c2dce166f2dac45db253
    io.emit('sunrise', payload);
  });

});











