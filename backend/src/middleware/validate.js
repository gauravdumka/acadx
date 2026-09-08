import { ZodError } from 'zod';
import { AppError } from '../utils/AppError.js';

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      // Format Zod errors
      const messages = error.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
      return next(new AppError(`Validation Error: ${messages}`, 400));
    }
    next(error);
  }
};
