import mongoose from 'mongoose';
import { ROLES } from '../constants/roles.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false, // Prevent password from leaking in queries
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      required: [true, 'Please provide a role'],
    },
    isActive: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
