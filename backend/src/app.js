import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler.js';
import { AppError } from './utils/AppError.js';

const app = express();

// Security and Parsing Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running normally.' });
});

// Unhandled Routes
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

// Centralized Error Handling
app.use(errorHandler);

export default app;
