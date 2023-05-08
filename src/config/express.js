import express from 'express';
import cors from 'cors';
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// routes

export default app;
