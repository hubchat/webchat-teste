"use strict";

var _http = require("./http");

_http.io.on('connection', client => {
  client.on('EnterRoom', room => {
    client.join(room);
  });
  client.on('LeaveRoom', room => {
    client.leave(room);
  });
  client.on('SendMessagesRoom', message => {
    client.broadcast.to(message.roomId).emit('ReceivedMessagesRoom', message);
  });
  client.on('CreatedRoom', room => {
    client.broadcast.emit('CreatedRoom', room);
  });
});