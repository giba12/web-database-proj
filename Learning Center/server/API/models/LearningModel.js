import mongoose from 'mongoose';

const learningSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Export as default so you can import easily
const LearningModel = mongoose.model('Learning', learningSchema);
export default LearningModel;
