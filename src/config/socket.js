import { Server } from 'socket.io';
import httpServer from './http';

const io = new Server(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
  },
});

export default io;
