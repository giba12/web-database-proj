//only software
import mongoose from "mongoose";
const devSoftwareSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    softwareInstalled: String,
});

const DeviceSoftware = mongoose.model('DeviceSoftware', devSoftwareSchema);
export default DeviceSoftware;