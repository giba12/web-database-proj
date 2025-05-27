//all info
import mongoose from "mongoose";
//import sec/etc here


const deviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String },
    serialNumber: { type: String, unique: true, required: true },
    assignedTo: { type: String },
    purchaseDate: { type: Date },
    status: {
      type: String,
      enum: ['available', 'assigned', 'maintenance', 'retired'],
      default: 'available',
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Device', deviceSchema);


/**
 * (blank)Schema.pre(?)("save", async function (next)
 * { if(!this.isModified("password")){
 * return next();}
 * 
 * this.password = await //insert role/encryption//;
 * next();
 * });
 * 
 * (blank)Schema.methods.matchPassword(for example) = async function(enteredPassword){
 * return await blahbal};
 * 
 * incorperate security/etc
 */

const Device = mongoose.model("Device", deviceSchema);
export default Device; 
