//documents & device info
import mongoose from "mongoose";
//import sec/encrypt


const employeeOtherSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    deviceID: String,
    doc: String, //will need to change to docs will be embedded type
});


const EmployeeOther = mongoose.model('EmployeeOther', employeeOtherSchema);
export default EmployeeOther;