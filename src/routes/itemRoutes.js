import express from 'express';
import prisma from '../prisma/client.js';
import auth from '../middleware/auth.js';

const itemRouter = express.Router();

itemRoutes.post('/', auth, async (req, res) => {
    try {
        const newItem = await prisma.item.create({ data: req.body });
        res.json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

itemRouter.get('/', async (req, res) => {
    try {
        const items = await prisma.item.findMany();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default itemRouter;