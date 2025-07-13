const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const PORT = 5000;

// Middleware
app.use(express.json());

app.use('/api/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Todo Backend Running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
