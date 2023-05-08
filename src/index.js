import './config/env';
import httpServer from './config/http';
import io from './config/socket';

(function bootstrap() {
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join_room', (data) => {
      socket.join(data);
      console.log(`user with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on('send_message', (data) => {
      // console.log(data);
      socket.to(data.room).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
    });
  });
  httpServer.listen(process.env.PORT, () => {
    console.log(`🔴 Server on http://localhost:${process.env.PORT}`);
  });
})();
