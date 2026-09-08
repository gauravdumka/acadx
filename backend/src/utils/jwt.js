import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const signToken = (id) => {
  return jwt.sign({ id }, env.JWT_SECRET, {
    expiresIn: '30d', // Tokens expire in 30 days
  });
};

export const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Remove the password from the output completely
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
