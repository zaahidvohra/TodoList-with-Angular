
const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM todos ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching todos:', err.message);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// Add a new todo
router.post('/', async (req, res) => {
  const { title, description = '', completed = false } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
      [title.trim(), description.trim(), completed]
    );
    
    const newTodo = {
      id: result.insertId,
      title: title.trim(),
      description: description.trim(),
      completed
    };
    
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('Error adding todo:', err.message);
    res.status(500).json({ error: 'Failed to add todo' });
  }
});

// Update a todo by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const [result] = await db.query(
      'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?',
      [title.trim(), description.trim(), completed, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    const updatedTodo = {
      id: parseInt(id),
      title: title.trim(),
      description: description.trim(),
      completed
    };
    
    res.json(updatedTodo);
  } catch (err) {
    console.error('Error updating todo:', err.message);
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// Delete a todo by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const [result] = await db.query('DELETE FROM todos WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json({ message: 'Todo deleted successfully', id: parseInt(id) });
  } catch (err) {
    console.error('Error deleting todo:', err.message);
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

module.exports = router;
