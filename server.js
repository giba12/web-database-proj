import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api', userRoutes);  // Use the user routes under /api endpoint

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('🔌 Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
