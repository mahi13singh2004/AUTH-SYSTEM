# MERN Authentication System

This is a basic full-stack authentication system built with the MERN stack. It includes user signup, login, logout, and protected route handling using JWT-based cookie authentication.

## 🔧 Tech Stack

### 📦 Backend (Node.js + Express)

- **Express.js** – RESTful API server
- **MongoDB + Mongoose** – NoSQL database and ORM
- **JWT (jsonwebtoken)** – Token-based authentication
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **cookie-parser** – Reading HTTP-only cookies
- **CORS** – Cross-origin resource sharing setup

### 💻 Frontend (React.js)

- **React.js** – Frontend framework
- **Zustand** – Lightweight global state management
- **Axios** – API calls with cookie-based auth (`withCredentials: true`)
- **React Router DOM** – Frontend routing
- **Tailwind CSS** *(optional)* – Utility-first styling framework

---

## 🔐 Features

- User Signup and Login
- Secure password hashing with bcrypt
- JWT stored in HTTP-only cookies
- Zustand-based auth state management
- Protected frontend routes
- Auth check on page load
- Auto-redirect if user is not logged in

## 🚀 Getting Started
BACKEND
1] Go to backend

2] npm i

3] Create a .env file and add:

MONGO_URI=mongo_credentials

PORT=5000

JWT_SECRET=any_text

NODE_ENV=development

FRONTEND
1[ Go to frontend

2] npm i



