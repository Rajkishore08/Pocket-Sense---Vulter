import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = ({ userId }) => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`/api/expenses/${userId}`)
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  const addExpense = () => {
    axios.post('/api/expenses', { userId, amount, category })
      .then(res => setExpenses([...expenses, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <input type="text" placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp.amount} - {exp.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
