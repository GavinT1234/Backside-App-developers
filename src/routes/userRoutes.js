import express from 'express';
import {
    createUserHandler,
    getUserHandler,
    getAllUsersHandler,
    updateUserHandler,
    deleteUserHandler,
} from '../controllers/userController.js';
import { validateUser } from '../middleware/userValidators.js';

const router = express.Router();

router.post('/', validateUser, createUserHandler); 
router.get('/:id', getUserHandler); 
router.get('/', getAllUsersHandler); 
router.put('/:id', validateUser, updateUserHandler); 
router.delete('/:id', deleteUserHandler); 

export default router;