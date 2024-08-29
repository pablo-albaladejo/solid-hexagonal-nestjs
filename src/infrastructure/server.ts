import express, { Request, Response } from 'express';
import userRoutes from './adapters/controllers/user.controller';

const app = express();

app.use('/users', userRoutes);
export default app;