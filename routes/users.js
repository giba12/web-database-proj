// routes/users.js
import express from 'express';
import User from '../models/User.js';
import Role from '../models/Role.js';  // For role-based permission check
import { verifyToken } from '../middleware/auth.js'; // Ensure user is authenticated
import { checkRole } from '../middleware/checkRole.js'; // Ensure user is HR Manager

const router = express.Router();

// Middleware to check if the user is HR Manager
router.use(verifyToken);  // Ensure user is authenticated

// Endpoint to get all users (HR Manager can view all)
router.get('/users', checkRole('HR Manager'), async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err });
  }
});

// Endpoint to edit a user (HR Manager can edit)
router.put('/users/:id', checkRole('HR Manager'), async (req, res) => {
  const { id } = req.params;
  const { name, email, role, department } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, role, department },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
});

export default router;
