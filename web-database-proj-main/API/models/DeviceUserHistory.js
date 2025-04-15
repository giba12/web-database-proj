
//only user history
import mongoose from "mongoose";

const devUserHistorySchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    userHistory: [{
        employeeID: String,
        checkout: Date,
        return: Date
    }],
});

const DeviceUserHistory = mongoose.model('DeviceUserHistory', devUserHistorySchema);
export default DeviceUserHistory;