// routes/appointmentRoutes.js or inline route
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // make sure model exists

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      message
    });

    await newAppointment.save(); // << Important line
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (err) {
    console.error(err); // Add this to see what’s wrong
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
