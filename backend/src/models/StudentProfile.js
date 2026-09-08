import mongoose from 'mongoose';
import { PROFICIENCY, VERIFICATION_STATUS } from '../constants/roles.js';

const studentSkillSchema = new mongoose.Schema({
  skillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CanonicalSkill',
    required: true,
  },
  proficiency: {
    type: String,
    enum: Object.values(PROFICIENCY),
    required: true,
  },
  verificationStatus: {
    type: String,
    enum: Object.values(VERIFICATION_STATUS),
    default: VERIFICATION_STATUS.UNVERIFIED,
  },
  evidenceType: {
    type: String,
    enum: ['ASSESSMENT', 'PROJECT', 'GITHUB', 'CERTIFICATE', 'SELF_DECLARED'],
    default: 'SELF_DECLARED',
  },
  evidenceUrl: {
    type: String,
  },
});

const studentProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    education: {
      degree: String,
      branch: String,
      graduationYear: Number,
      institution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to an Institution user
      },
    },
    careerGoal: {
      type: String,
      trim: true,
    },
    skills: [studentSkillSchema],
  },
  {
    timestamps: true,
  }
);

export const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
