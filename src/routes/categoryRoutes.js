import express from 'express';
import {
    createCategoryHandler,
    getCategoryHandler,
    getAllCategoriesHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
} from '../controllers/categoryController.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validatePayload } from '../middleware/validatePayload.js';
import { categoryValidationSchema } from '../middleware/validatePayload.js';

import authRouter from './authRoutes.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.use(authRouter); 

router.post('/', authenticateToken, validatePayload(categoryValidationSchema), handleValidationErrors, createCategoryHandler);
router.get('/:id', authenticateToken, getCategoryHandler);
router.get('/', authenticateToken, getAllCategoriesHandler);
router.put('/:id', authenticateToken, validatePayload(categoryValidationSchema), handleValidationErrors, updateCategoryHandler);
router.delete('/:id', authenticateToken, deleteCategoryHandler);

export default router;