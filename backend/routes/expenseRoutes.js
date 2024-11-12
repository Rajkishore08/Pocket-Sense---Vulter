const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get expenses for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new expense
router.post('/', async (req, res) => {
  const { userId, amount, category } = req.body;
  const newExpense = new Expense({ userId, amount, category });
  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
