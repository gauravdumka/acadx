import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { AppError } from '../utils/AppError.js';
import { createSendToken } from '../utils/jwt.js';

export const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // 1. Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError('Email is already in use', 400);
  }

  // 2. Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create the user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  // 4. Send token
  createSendToken(newUser, 201, res);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check if user exists & select the password field (since it's select: false by default)
  const user = await User.findOne({ email }).select('+password');
  
  if (!user) {
    throw new AppError('Incorrect email or password', 401);
  }

  // 2. Check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    throw new AppError('Incorrect email or password', 401);
  }

  // 3. Send token
  createSendToken(user, 200, res);
};

export const getMe = async (req, res, next) => {
  // req.user is set by the `protect` middleware
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user,
    },
  });
};
