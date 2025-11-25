import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

router.use(authenticateToken);

// Your protected routes here
router.post('/', (req, res) => {
  // Access the authenticated user from `req.user`
  res.json({ message: 'Protected resource' });
});

export default authenticateToken;