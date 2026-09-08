import mongoose from 'mongoose';
import { VERIFICATION_STATUS } from '../constants/roles.js';

const companySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    verificationStatus: {
      type: String,
      enum: Object.values(VERIFICATION_STATUS),
      default: VERIFICATION_STATUS.UNVERIFIED,
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // The Admin who verified them
    },
  },
  {
    timestamps: true,
  }
);

export const Company = mongoose.model('Company', companySchema);
