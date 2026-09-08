import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { validate } from '../middleware/validate.js';
import { registerSchema, loginSchema } from '../validators/authValidator.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

// Protected route to get current user info
router.get('/me', protect, getMe);

export default router;
