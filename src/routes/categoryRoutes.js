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

const router = express.Router();

router.post('/', validatePayload(categoryValidationSchema), handleValidationErrors, createCategoryHandler); 
router.get('/:id', getCategoryHandler); 
router.get('/', getAllCategoriesHandler); 
router.put('/:id', validatePayload(categoryValidationSchema), handleValidationErrors, updateCategoryHandler); 
router.delete('/:id', deleteCategoryHandler); 

export default router;