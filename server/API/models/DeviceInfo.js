//status / type
import mongoose from "mongoose";
const devInfoSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    deviceType: String,
    status: String
});

const DeviceInfo = mongoose.model('DeviceInfo', devInfoSchema);
export default DeviceInfo;