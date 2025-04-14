// middleware/auth.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware to check if the user is authenticated (JWT validation)
const verifyToken = (req, res, next) => {
  // Get token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store the decoded user data in the request object
    next(); // Allow request to proceed
  } catch (error) {
    res.status(401).json({ message: 'Access Denied: Invalid Token' });
  }
};

export { verifyToken };
