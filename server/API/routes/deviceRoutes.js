//const express = require('express');
import express from "express";
const router = express.Router();
//const Device = require('../models/Device');
import Device from "../models/Device.js";
//const { generateDeviceId } = require('../utils/idGenerator');
import { generateDeviceId } from "../utils/idGenerator.js";

// CREATE device
router.post('/', async (req, res) => {
  try {
    const deviceId = await generateDeviceId();
    const device = new Device({ ...req.body, deviceId });
    await device.save();
    res.status(201).json(device);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ single device
router.get('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.json(device);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE device
router.put('/:id', async (req, res) => {
  try {
    const updated = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE device
router.delete('/:id', async (req, res) => {
  try {
    await Device.findByIdAndDelete(req.params.id);
    res.json({ message: 'Device deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;