import express from 'express';
import {
    createItemHandler,
    getItemHandler,
    getAllItemsHandler,
    updateItemHandler,
    deleteItemHandler,
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/', createItemHandler);
router.get('/:id', getItemHandler); 
router.get('/', getAllItemsHandler);
router.put('/:id', updateItemHandler); 
router.delete('/:id', deleteItemHandler); 

export default router;