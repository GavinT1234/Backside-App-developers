import express from 'express';
import {
    createUserHandler,
    getUserHandler,
    getAllUsersHandler,
    updateUserHandler,
    deleteUserHandler,
} from '../controllers/userController.js';
import { validateUser } from '../middleware/userValidators.js';
import { handleValidationErrors } from '../middleware/handleValidationErrors.js';
import { validatePayload } from '../middleware/validatePayload.js';
import { userValidationSchema } from '../middleware/validatePayload.js';

import authRouter from './authRoutes.js';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.use(authRouter); 

router.post('/', authenticateToken, validatePayload(userValidationSchema), handleValidationErrors, validateUser, createUserHandler);
router.get('/:id', authenticateToken, getUserHandler);
router.get('/', authenticateToken, getAllUsersHandler);
router.put('/:id', authenticateToken, validatePayload(userValidationSchema), handleValidationErrors, validateUser, updateUserHandler);
router.delete('/:id', authenticateToken, deleteUserHandler);

export default router;