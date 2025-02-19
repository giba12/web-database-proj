
//default schema w/ all info
import mongoose from "mongoose";
//import sec/encrypt


const employeeSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    deviceID: String,
    doc: String,
    vehicleType: String,
    vehicleID: String,
    contactInfo: [{
        contactEmail: String,
        contactPhone: String,
        required: true
    }],
    emergencyInfo: [{
        contactEmail: String,
        emergencyPhone: String
    }],
    address: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    jobTitle: {
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


const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;