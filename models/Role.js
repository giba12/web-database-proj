import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: ['Employee', 'HR Manager', 'IT Admin', 'Security Admin']  // List of roles
  },
  permissions: {
    type: [String], // Permissions assigned to each role
    default: []
  }
});

// Create and export the Role model
export default mongoose.model('Role', roleSchema);
