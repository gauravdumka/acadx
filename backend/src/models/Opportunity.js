import mongoose from 'mongoose';
import { PROFICIENCY } from '../constants/roles.js';

const opportunitySkillSchema = new mongoose.Schema({
  skillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CanonicalSkill',
    required: true,
  },
  minimumProficiency: {
    type: String,
    enum: Object.values(PROFICIENCY),
    default: PROFICIENCY.BEGINNER,
  },
});

const opportunitySchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    opportunityType: {
      type: String,
      enum: ['JOB', 'INTERNSHIP', 'INDUSTRY_LEARNING', 'FACULTY_INTERNSHIP', 'INDUSTRIAL_TRAINING'],
      required: true,
    },
    requiredSkills: [opportunitySkillSchema],
    preferredSkills: [opportunitySkillSchema],
    eligibility: {
      minimumDegree: String,
      targetGraduationYears: [Number],
    },
    status: {
      type: String,
      enum: ['DRAFT', 'PUBLISHED', 'CLOSED'],
      default: 'DRAFT',
    },
  },
  {
    timestamps: true,
  }
);

export const Opportunity = mongoose.model('Opportunity', opportunitySchema);
