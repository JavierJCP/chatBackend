import { createServer } from 'http';
import app from './express';

const httpServer = createServer(app);

export default httpServer;
