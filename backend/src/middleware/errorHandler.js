import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    message = err.message;
  } else if (err.name === 'CastError') {
    // Mongoose cast error (e.g., invalid ObjectId)
    statusCode = 400;
    message = 'Invalid ID format';
  }

  // Log error in development, or if it's an unexpected server error
  if (env.NODE_ENV === 'development' || statusCode === 500) {
    console.error(`[ERROR] ${err.name}: ${err.message}`, err.stack);
  }

  res.status(statusCode).json({
    status: 'error',
    message,
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
