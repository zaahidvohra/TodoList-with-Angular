
module.exports = {
  PORT: process.env.PORT || 5000,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'https://todo-list-with-angular-blush.vercel.app',
  DB_CONFIG: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'todoapp'
  },
  API_PREFIX: '/api'
};
