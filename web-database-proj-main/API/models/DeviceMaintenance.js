
//maint history
import mongoose from "mongoose";
const deviceMaintSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    deviceType: String,
    maintHistory: [{
        action: String,
        maintDate: Date
    }]
});


const DeviceMaintenance = mongoose.model('DeviceMaintenance', deviceMaintSchema);
export default DeviceMaintenance;