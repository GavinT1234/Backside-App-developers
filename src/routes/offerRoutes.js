import express from 'express';
import {
    createOfferHandler,
    getOfferHandler,
    getAllOffersHandler,
    updateOfferHandler,
    deleteOfferHandler,
} from '../controllers/offerController.js';

const router = express.Router();

router.post('/', createOfferHandler); 
router.get('/:id', getOfferHandler); 
router.get('/', getAllOffersHandler); 
router.put('/:id', updateOfferHandler); 
router.delete('/:id', deleteOfferHandler); 

export default router;