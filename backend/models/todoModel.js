const db = require('./db');

exports.getAllTodos = (callback) => {
  db.query('SELECT * FROM todos', callback);
};

exports.createTodo = (todo, callback) => {
  db.query(
    'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
    [todo.title, todo.description, todo.completed],
    callback
  );
};

exports.updateTodo = (id, todo, callback) => {
  db.query(
    'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?',
    [todo.title, todo.description, todo.completed, id],
    callback
  );
};

exports.deleteTodo = (id, callback) => {
  db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};
