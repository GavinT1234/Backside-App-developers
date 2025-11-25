import express from 'express';
import {
    createItemHandler,
    getItemHandler,
    getAllItemsHandler,
    updateItemHandler,
    deleteItemHandler,
} from '../controllers/itemController.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validatePayload } from '../middleware/validatePayload.js';
import { itemValidationSchema } from '../middleware/validatePayload.js';

import authRouter from './authRoutes.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
const router = express.Router();

router.use(authRouter); // Add the authentication router before defining your item routes

router.post('/', authenticateToken, validatePayload(itemValidationSchema), handleValidationErrors, createItemHandler);
router.get('/:id', authenticateToken, getItemHandler); 
router.get('/', authenticateToken, getAllItemsHandler);
router.put('/:id', authenticateToken, validatePayload(itemValidationSchema), handleValidationErrors, updateItemHandler); 
router.delete('/:id', authenticateToken, deleteItemHandler); 

export default router;