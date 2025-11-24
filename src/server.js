import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from './routes/userRoutes.js';
import offerRoutes from './routes/offerRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(morgan('tiny'));

app.use(express.json());

// Routes
app.use('/api/users', userRoutes); 
app.use('/api/offers', offerRoutes); 
app.use('/api/categories', categoryRoutes); 
app.use('/api/items', itemRoutes); 


app.use((err, req, res, next) => {
  if (err.status === 400) {
      return res.status(400).json({ error: 'Bad Request', message: err.message });
  }
  next(err);
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.name === 'PrismaClientValidationError') {
      return res.status(400).json({
          error: 'Validation Error',
          message: err.message,
      });
  }

  // Handle other errors
  res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
