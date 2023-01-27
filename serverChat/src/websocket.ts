import { io } from './http';

interface IOwnerId {
  _id?: string;
  name?: string;
  email?: string;
}

interface IRoomDialog {
  _id?: string;
  message: string;
  ownerId?: IOwnerId;
  roomId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

io.on('connection', (client) => {
  client.on('EnterRoom', (room) => {
    client.join(room);
  });

  client.on('LeaveRoom', (room) => {
    client.leave(room);
  });

  client.on('SendMessagesRoom', (message: IRoomDialog) => {
    client.broadcast.to(message.roomId).emit('ReceivedMessagesRoom', message);
    client.broadcast.emit('NotificationMessageRoom', message);
  });

  client.on('CreatedRoom', (room) => {
    client.broadcast.emit('CreatedRoom', room);
  });
});
