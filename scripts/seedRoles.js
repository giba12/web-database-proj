import mongoose from 'mongoose';  // Using ES module import
import dotenv from 'dotenv';  // Using ES module import
import Role from '../models/Role.js';  // Using ES module import

dotenv.config();  // Initialize dotenv to load environment variables

const roles = [
  {
    name: 'Employee',
    permissions: [
      'edit_own_profile', // Employees can edit their own profile
      'view_employee_directory', // Employees can view other employees' basic info
      'view_learning_resources' // Employees can view the learning center
    ]
  },
  {
    name: 'HR Manager',
    permissions: [
      'view_users', // Managers can view users
      'edit_users', // Managers can edit users
      'delete_users', // Managers can delete users
      'edit_roles', // Managers can edit user roles
      'view_employee_directory' // Managers can view employee directory
    ]
  },
  {
    name: 'IT Admin',
    permissions: [
      'manage_devices', // IT Admins can manage devices
      'assign_devices', // IT Admins can assign devices to users
      'view_devices', // IT Admins can view devices
      'edit_learning_resources', // IT Admins can edit learning resources
      'view_learning_resources' // IT Admins can view learning resources
    ]
  },
  {
    name: 'Security Admin',
    permissions: [
      'view_security_logs', // Security Admins can view security logs
      'audit_roles', // Security Admins can audit roles
      'view_activity_reports' // Security Admins can view activity reports
    ]
  }
];

const seedRoles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('🔌 Connected to MongoDB');

    for (const role of roles) {
      const exists = await Role.findOne({ name: role.name });
      if (!exists) {
        await Role.create(role);
        console.log(`✅ Role '${role.name}' created`);
      } else {
        console.log(`ℹ️ Role '${role.name}' already exists`);
      }
    }

    console.log('🌱 Role seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedRoles();
