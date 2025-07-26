const express = require('express');
const cors = require('cors');
const sendRoutes = require('./routes/sendmessage')
const firebaseHandle = require('./routes/firebaseOpt')
const incomingRoutes = require('./routes/incoming');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/send', sendRoutes);
app.use('/api/firebase', firebaseHandle);
app.use('/api/incoming', incomingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


