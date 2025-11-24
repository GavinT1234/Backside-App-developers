import { check } from 'express-validator';
import prisma from '../config/db.js'; 

export function validatePayload(schema) {
    return schema.map((field) => {
        const { name, rules } = field;
        return check(name, rules.message)[rules.validator](...rules.args);
    });
};

export const isUniqueName = (model, fieldName = 'name') => {
    return async (value) => {
        const exists = await prisma[model].findUnique({
            where: { [fieldName]: value },
        });
        if (exists) {
            throw new Error(`A ${model} with the same ${fieldName} already exists`);
        }
    };
};

// Validation Schemas
export const userValidationSchema = [
    { name: 'displayName', rules: { validator: 'isString', args: [], message: 'Field "displayName" must be a string' } },
    { name: 'email', rules: { validator: 'isEmail', args: [], message: 'Field "email" must be a valid email' } },
    { name: 'email', rules: { validator: 'custom', args: [isUniqueName('user', 'email')], message: 'Field "email" must be unique' } },
    { name: 'password', rules: { validator: 'isLength', args: [{ min: 6 }], message: 'Field "password" must be at least 6 characters long' } },
];

export const categoryValidationSchema = [
    { name: 'name', rules: { validator: 'isString', args: [], message: 'Field "name" must be a string' } },
    { name: 'name', rules: { validator: 'custom', args: [isUniqueName('category')], message: 'Field "name" must be unique' } },
];

export const itemValidationSchema = [
    { name: 'title', rules: { validator: 'isString', args: [], message: 'Field "title" must be a string' } },
    { name: 'price', rules: { validator: 'isNumeric', args: [], message: 'Field "price" must be a number' } },
    { name: 'categoryId', rules: { validator: 'isInt', args: [], message: 'Field "categoryId" must be an integer' } },
    { name: 'userId', rules: { validator: 'isInt', args: [], message: 'Field "userId" must be an integer' } },
];

export const offerValidationSchema = [
    { name: 'amount', rules: { validator: 'isInt', args: [{ min: 1 }], message: 'Field "amount" must be an integer greater than 0' } },
    { name: 'type', rules: { validator: 'isIn', args: [['purchase', 'trade']], message: 'Field "type" must be either "purchase" or "trade"' } },
    { name: 'status', rules: { validator: 'optional', args: [], message: 'Field "status" must be "pending", "accepted", or "declined"' } },
    { name: 'itemId', rules: { validator: 'isInt', args: [], message: 'Field "itemId" must be an integer' } },
    { name: 'userId', rules: { validator: 'isInt', args: [], message: 'Field "userId" must be an integer' } },
];