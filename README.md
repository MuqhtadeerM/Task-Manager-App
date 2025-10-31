# MERN Stack Authentication & Task Manager

A full-stack web application built with MongoDB, Express.js, React.js, and Node.js (MERN) featuring JWT authentication and a task management dashboard.

## 🚀 Features

### Authentication
- User registration with validation
- Secure login with JWT tokens
- Password hashing using bcrypt
- Protected routes and API endpoints
- Profile management

### Task Management
- Create, Read, Update, Delete (CRUD) operations
- Task filtering by status and priority
- Search functionality
- Real-time updates
- Responsive design for all devices

### Security
- JWT-based authentication
- Password hashing with bcrypt (10 salt rounds)
- Token validation middleware
- Server-side and client-side form validation
- Protected API routes

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- React Router DOM v6
- Axios
- Tailwind CSS v4

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- CORS

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-auth-app.git
cd mern-auth-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth-app
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Linux
sudo systemctl start mongod

# macOS
brew services start mongodb-community

# Windows
net start MongoDB
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:3000`

## 📁 Project Structure

```
mern-auth-app/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── TaskCard.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes
```
POST   /api/auth/register     - Register a new user
POST   /api/auth/login        - Login user
GET    /api/auth/profile      - Get user profile (Protected)
PUT    /api/auth/profile      - Update user profile (Protected)
```

### Task Routes
```
GET    /api/tasks             - Get all tasks (Protected)
GET    /api/tasks/:id         - Get single task (Protected)
POST   /api/tasks             - Create new task (Protected)
PUT    /api/tasks/:id         - Update task (Protected)
DELETE /api/tasks/:id         - Delete task (Protected)
```

## 📝 API Documentation

### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the MERN stack project",
  "status": "pending",
  "priority": "high"
}
```

## 🎨 Features Implementation

- ✅ Responsive UI with Tailwind CSS
- ✅ JWT Authentication
- ✅ Password Hashing
- ✅ Protected Routes
- ✅ CRUD Operations
- ✅ Search & Filter
- ✅ Form Validation
- ✅ Error Handling
- ✅ Loading States

## 🔒 Security Best Practices

1. Passwords are hashed using bcrypt with 10 salt rounds
2. JWT tokens expire after 7 days
3. Tokens are stored in localStorage (consider httpOnly cookies for production)
4. Server-side validation using express-validator
5. Protected routes require valid JWT token
6. CORS enabled for cross-origin requests

## 📈 Scalability Considerations

### For Production Deployment:

1. **Environment Variables**: Use proper environment variable management
2. **Database**: 
   - Use MongoDB Atlas for cloud hosting
   - Implement connection pooling
   - Add database indexing for better performance

3. **Security Enhancements**:
   - Use httpOnly cookies instead of localStorage for tokens
   - Implement refresh tokens
   - Add rate limiting to prevent abuse
   - Enable HTTPS

4. **Frontend Optimization**:
   - Code splitting and lazy loading
   - Image optimization
   - Caching strategies
   - CDN for static assets

5. **Backend Optimization**:
   - API response caching with Redis
   - Load balancing
   - Clustering for Node.js
   - Database query optimization

6. **Monitoring & Logging**:
   - Implement logging with Winston or Morgan
   - Error tracking with Sentry
   - Performance monitoring with New Relic or Datadog

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Build for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Muhammed Muqhtadeer
- GitHub: [@Muqtadeer](https://github.com/MuqhtadeerM)
- LinkedIn: [Muhammed Muqhtadeer](https://linkedin.com/in/muqhtadeer-m/)

## 🙏 Acknowledgments

- MongoDB Documentation
- Express.js Documentation
- React Documentation
- Tailwind CSS Documentation

## 📞 Support

For support, email muhammedmuzawar9@gmail.com or open an issue in the repository.

---

⭐ If you found this project helpful, please give it a star!
