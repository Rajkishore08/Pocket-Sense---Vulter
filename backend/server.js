const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("MongoDB connection error:", error));

// Import and use routes
const expenseRoutes = require('./routes/expenseRoutes');
app.use('/api/expenses', expenseRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
