const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());

// CORS middleware
app.use(cors({
  origin: config.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use(`${config.API_PREFIX}/todos`, todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Todo Backend Running!',
    version: '1.0.0',
    endpoints: {
      todos: `${config.API_PREFIX}/todos`
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(config.PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${config.PORT}`);
});
