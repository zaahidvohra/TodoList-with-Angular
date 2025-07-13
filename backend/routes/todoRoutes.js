const express = require('express');
const router = express.Router();
const db = require('../db'); // this is now the pool

// Get all todos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching todos:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  const { title, completed } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      [title, completed]
    );
    res.status(201).json({ id: result.insertId, title, completed });
  } catch (err) {
    console.error('Error adding todo:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
