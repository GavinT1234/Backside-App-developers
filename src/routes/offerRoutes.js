import express from 'express';
import {
    createOfferHandler,
    getOfferHandler,
    getAllOffersHandler,
    updateOfferHandler,
    deleteOfferHandler,
} from '../controllers/offerController.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validatePayload } from '../middleware/validatePayload.js';
import { offerValidationSchema } from '../middleware/validatePayload.js';

const router = express.Router();

router.post('/', validatePayload(offerValidationSchema), handleValidationErrors, createOfferHandler); 
router.get('/:id', getOfferHandler); 
router.get('/', getAllOffersHandler); 
router.put('/:id', validatePayload(offerValidationSchema), handleValidationErrors, updateOfferHandler); 
router.delete('/:id', deleteOfferHandler); 

export default router;