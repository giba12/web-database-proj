import mongoose from "mongoose";
//import sec/encrypt


const employeeSearchSchema = new mongoose.Schema({
    employeeID: { //not visable in search info, used for aggro
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactInfo: [{
        contactEmail: String,
        contactPhone: String,
        required: true
    }],
    department: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    }
});


const EmployeeSearch = mongoose.model('EmployeeSearch', employeeSearchSchema);
export default EmployeeSearch;