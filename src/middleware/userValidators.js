import {  body } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateUser = [
    body('email')
        .exists({values: 'false'})
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Must be a valid email address')
        .normalizeEmail(),

    body('password')
        .exists({values: 'false'})
        .withMessage('Password is required')
        .bail()
        .isLength({min: 8, max: 64})
        .withMessage('Password must be between 8 and 64 characters long'),

    handleValidationErrors,
];