//const Device = require('../models/Device');
import Device from "../models/Device.js";

let counter = 1000;

export async function generateDeviceId() {
  // Make it more robust in production by checking DB
  const id = `DEV-${counter++}`;
  return id;
}

export default { generateDeviceId };