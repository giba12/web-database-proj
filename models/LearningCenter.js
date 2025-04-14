import mongoose from 'mongoose';

const learningCenterSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('LearningCenter', learningCenterSchema);
