
//all info
import mongoose from "mongoose";
//import sec/etc here


const deviceSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    deviceType: String,
    status: String, //in use/etc
    userHistory: [{
        employeeID: String,
        checkout: Date,
        return: Date
    }],
    softwareInstalled: String
});

/** Device Inventory Management
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['available', 'assigned', 'under_repair', 'retired'],
    default: 'available'
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Device', deviceSchema);
*/




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
