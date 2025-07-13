const Todo = require('../models/todoModel');

exports.getTodos = (req, res) => {
  Todo.getAllTodos((err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

exports.createTodo = (req, res) => {
  const newTodo = req.body;
  Todo.createTodo(newTodo, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...newTodo });
  });
};

exports.updateTodo = (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  Todo.updateTodo(id, updatedTodo, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...updatedTodo });
  });
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  Todo.deleteTodo(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Todo deleted successfully' });
  });
};
