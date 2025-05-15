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
