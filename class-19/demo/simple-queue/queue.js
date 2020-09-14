'use strict';

const io = require('socket.io')(3000);
// const uuid = require('uuid').v4();

const queue = {
  hello: {}
};

io.on('connection', socket => {

  console.log('connection made');

  socket.on('hello', message => {

    console.log('HALLO, msg received:', message);

    let id = Math.random();
    queue.hello[id] = message;

    const payload = {id, message};

    // io.emit('hello-greeting', message);
    console.log(queue.hello);
    socket.broadcast.emit('hello-greeting', payload);
  });

  socket.on('getall', () => {

    for(let id in queue.hello) {

      const message = queue.hello[id];
      const payload = {id , message};

      socket.emit('hello-greeting', payload);
    }

    // Object.keys(queue.hello).forEach(id => {
    //   socket.emit('hello', { id, payload: queue.hello[id] });
    // })

  });

  socket.on('received', message => {
    delete queue.hello[message.id];
    console.log(queue.hello);
  });

})

