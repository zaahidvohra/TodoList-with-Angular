const express = require('express');
const router = express.Router();
const db = require('../models/db');

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
  const { title, completed, description } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
      [title, completed, description]
    );
    res.status(201).json({ id: result.insertId, title, completed });
  } catch (err) {
    console.error('Error adding todo:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

// ✅ Delete a todo by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM todos WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    console.error('Error deleting todo:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

// ✅ Update a todo by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
      [title, completed, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({ id, title, completed });
  } catch (err) {
    console.error('Error updating todo:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
