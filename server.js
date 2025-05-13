const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Load appointment routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointments', appointmentRoutes);

// Connect to MongoDB

// Connect to MongoDB
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(() => {console.log('MongoDB connected');app.listen(PORT, () => console.log(`Server running on port ${PORT}`));})
  .catch((err) => console.error('MongoDB connection error:', err));





