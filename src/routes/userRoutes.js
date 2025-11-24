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

const router = express.Router();

router.post('/', validatePayload(userValidationSchema), handleValidationErrors, validateUser, createUserHandler);
router.get('/:id', getUserHandler);
router.get('/', getAllUsersHandler);
router.put('/:id', validatePayload(userValidationSchema), handleValidationErrors, validateUser, updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;