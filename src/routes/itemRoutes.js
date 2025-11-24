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

const router = express.Router();

router.post('/', validatePayload(itemValidationSchema), handleValidationErrors, createItemHandler);
router.get('/:id', getItemHandler); 
router.get('/', getAllItemsHandler);
router.put('/:id', validatePayload(itemValidationSchema), handleValidationErrors, updateItemHandler); 
router.delete('/:id', deleteItemHandler); 

export default router;