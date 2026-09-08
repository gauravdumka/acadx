import mongoose from 'mongoose';

const canonicalSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      unique: true,
      trim: true,
    },
    aliases: [
      {
        type: String,
        trim: true,
      },
    ],
    category: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CanonicalSkill = mongoose.model('CanonicalSkill', canonicalSkillSchema);
