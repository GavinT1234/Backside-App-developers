import express from 'express';
import {
    createCategoryHandler,
    getCategoryHandler,
    getAllCategoriesHandler,
    updateCategoryHandler,
    deleteCategoryHandler,
} from '../controllers/categoryController.js';

const router = express.Router();

router.post('/', createCategoryHandler); 
router.get('/:id', getCategoryHandler); 
router.get('/', getAllCategoriesHandler); 
router.put('/:id', updateCategoryHandler); 
router.delete('/:id', deleteCategoryHandler); 

export default router;