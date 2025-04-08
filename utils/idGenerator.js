const Device = require('../models/Device');

let counter = 1000;

async function generateDeviceId() {
  // Make it more robust in production by checking DB
  const id = `DEV-${counter++}`;
  return id;
}

module.exports = { generateDeviceId };
