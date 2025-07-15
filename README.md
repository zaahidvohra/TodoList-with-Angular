# Todo List Application - Angular & Node.js

A full-stack todo list application built with Angular frontend and Node.js backend, featuring MySQL database integration and CI/CD pipeline.

[![Live Demo](https://img.shields.io/badge/Demo-Live-green)](https://todo-list-with-angular-blush.vercel.app/)
![Angular](https://img.shields.io/badge/Angular-15%2B-red)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![MySQL](https://img.shields.io/badge/MySQL-8.0%2B-blue)

## 🚀 Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Inline editing functionality
- ✅ Responsive design with dark theme
- ✅ Real-time data synchronization
- ✅ Local storage backup when offline
- ✅ RESTful API architecture
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Deployed on Replit and Vercel

## 🏗️ Architecture

```
📦 Todo Application
├── 🎨 Frontend (Angular)
│   ├── Components (Todo, TodoList, AddTodo, About)
│   ├── Services (TodoService)
│   ├── Routing & Navigation
│   └── Responsive UI with Bootstrap
├── ⚙️ Backend (Node.js + Express)
│   ├── RESTful API endpoints
│   ├── MySQL database integration
│   ├── CORS configuration
│   └── Error handling middleware
└── 🚀 DevOps
    ├── GitHub Actions CI/CD
    ├── Automated testing
    └── Multi-platform deployment
```

## 🛠️ Technology Stack

### Frontend
- **Angular 15+** - Modern web framework
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Responsive UI components
- **RxJS** - Reactive programming
- **HTML5 & CSS3** - Modern web standards

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL** - Relational database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### DevOps & Deployment
- **GitHub Actions** - CI/CD pipeline
- **Replit** - Backend hosting
- **Vercel** - Frontend hosting
- **Railway** - MySQL database hosting

## 📁 Project Structure

```
todo-app/
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── MyComponents/
│   │   │   │   ├── todo/              # Main todo component
│   │   │   │   ├── todo-list/         # Individual todo items
│   │   │   │   ├── add-todo/          # Add new todo form
│   │   │   │   └── about/             # About page
│   │   │   ├── services/
│   │   │   │   └── todo.service.ts    # API service layer
│   │   │   ├── config/
│   │   │   │   └── api.config.ts      # API configuration
│   │   │   └── Todo.ts                # Todo interface/model
│   │   └── assets/                    # Static assets
│   ├── angular.json                   # Angular CLI configuration
│   ├── package.json                   # Frontend dependencies
│   └── vercel.json                    # Vercel deployment config
├── backend/                   # Node.js API server
│   ├── config/
│   │   └── config.js                  # Application configuration
│   ├── models/
│   │   ├── db.js                      # Database connection
│   │   └── todoModel.js               # Todo model/schema
│   ├── routes/
│   │   └── todoRoutes.js              # API route definitions
│   ├── controller/
│   │   └── todoController.js          # Business logic
│   ├── .env                           # Environment variables
│   ├── index.js                       # Application entry point
│   └── package.json                   # Backend dependencies
├── .github/
│   └── workflows/
│       ├── ci-cd.yml                  # Main CI/CD pipeline
│       └── pr-checks.yml              # Pull request checks
├── .replit                            # Replit configuration
└── README.md                          # Project documentation
```

## 🚦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Retrieve all todos |
| GET | `/api/todos/:id` | Retrieve specific todo |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update existing todo |
| DELETE | `/api/todos/:id` | Delete todo |

### Request/Response Examples

**Create Todo (POST /api/todos)**
```json
{
  "title": "Learn Angular",
  "description": "Complete Angular tutorial",
  "completed": false
}
```

**Response**
```json
{
  "id": 1,
  "title": "Learn Angular",
  "description": "Complete Angular tutorial",
  "completed": false
}
```

## 🔧 Environment Setup

### Prerequisites
- Node.js 18+ 
- MySQL 8.0+
- Angular CLI 15+

### Environment Variables

Create `.env` files for different environments:

**Backend (.env)**
```env
# Database Configuration
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=todoapp
PORT=5000

# CORS Configuration
CORS_ORIGIN=http://localhost:4200
```

**Frontend (environment.ts)**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

### Local Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd todo-app
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npm start
```

3. **Setup Frontend**
```bash
cd frontend
npm install
ng serve
```

4. **Database Setup**
```sql
CREATE DATABASE todoapp;
USE todoapp;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🚀 Deployment

### Replit Deployment (Backend)
1. Import project to Replit
2. Configure environment variables in Secrets
3. Backend automatically deploys on push to main

### Vercel Deployment (Frontend)
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/frontend`
3. Frontend automatically deploys on push to main

## 🔄 CI/CD Pipeline

The project includes automated CI/CD with GitHub Actions:

### Features
- ✅ Automated testing on pull requests
- ✅ Code quality checks (linting, formatting)
- ✅ Multi-environment deployment
- ✅ Dependency vulnerability scanning
- ✅ Build optimization

### Workflow Triggers
- Push to `main` branch → Production deployment
- Pull requests → Testing and validation
- Manual triggers → Development deployment

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test
npm run e2e

# Backend tests
cd backend
npm run test
npm run test:coverage
```

## 📊 Features Overview

### Frontend Features
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Dark Theme**: Modern UI with glassmorphism effects
- **Inline Editing**: Edit todos without navigation
- **Real-time Updates**: Immediate UI feedback
- **Offline Support**: Local storage fallback
- **Form Validation**: Client-side validation

### Backend Features
- **RESTful API**: Standard HTTP methods and status codes
- **Database Integration**: MySQL with connection pooling
- **Error Handling**: Comprehensive error middleware
- **CORS Support**: Configurable cross-origin requests
- **Environment Config**: Flexible configuration management
- **Input Validation**: Server-side data validation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Express.js community for the robust backend framework
- Bootstrap team for the responsive UI components
- MySQL team for the reliable database system

---

⭐ Star this repository if you found it helpful!
