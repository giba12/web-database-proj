import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeID: { type: String, required: true },
  name: { type: String, required: true },
  deviceID: { type: String },
  doc: { type: String },
  vehicleType: { type: String },
  vehicleID: { type: String },

  contactInfo: [{
    contactEmail: { type: String },
    contactPhone: { type: String }
  }],

  emergencyInfo: [{
    contactEmail: { type: String },
    emergencyPhone: { type: String }
  }],

  address: { type: String, required: true },
  department: { type: String, required: true },
  jobTitle: { type: String, required: true },
  roleType: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
