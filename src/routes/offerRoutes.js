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

import authRouter from './authRoutes.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.use(authRouter); 

router.post('/', authenticateToken, validatePayload(offerValidationSchema), handleValidationErrors, createOfferHandler);
router.get('/:id', authenticateToken, getOfferHandler);
router.get('/', authenticateToken, getAllOffersHandler);
router.put('/:id', authenticateToken, validatePayload(offerValidationSchema), handleValidationErrors, updateOfferHandler);
router.delete('/:id', authenticateToken, deleteOfferHandler);

export default router;