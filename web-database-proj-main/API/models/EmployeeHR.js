
//contains HR sens material 

import mongoose from "mongoose";
//import sec/encrypt


const employeeHRSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true
    },
    vehicleType: String,
    vehicleID: String,
    emergencyInfo: [{
        contactEmail: String,
        emergencyPhone: String
    }],
    address: {
        type: String,
        required: true
    },
    roleType: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const EmployeeHR = mongoose.model('EmployeeHR', employeeHRSchema);
export default EmployeeHR;