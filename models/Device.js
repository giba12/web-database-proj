import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: String,
  type: String,
  serialNumber: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['available', 'assigned', 'maintenance'], default: 'available' }
}, { timestamps: true });

export default mongoose.model('Device', deviceSchema);