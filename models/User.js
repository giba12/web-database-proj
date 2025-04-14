import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String,required: true},
    department: { type: String, required: true},
    role: {type: String, enum: ["Employee", "HR Manager", "IT Admin", "Security Admin"], default: 'Employee'},
    profileImage: {type: String},
    createAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export default mongoose.model('User', userSchema);