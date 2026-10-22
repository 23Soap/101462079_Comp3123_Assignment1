# COMP 3123 - Assignment 1 (Backend)

## Project Purpose
This project is a secure RESTful backend API for an Employee Management System built with Node.js,
Express, and MongoDB. It allows users to register, login, and manage their own employees securely.

## Technologies Used
* Node.js & Express.js
* MongoDB & Mongoose
* bcrypt (Password Hashing)
* express-rate-limit (Rate Limiting)
* Helmet (Security Headers)
## Installation & Setup
1. Clone the repository.
2. Install dependencies using: `npm install`
3. Create a `.env` file based on `.env.example` and configure your `MONGODB_URI` and `PORT`.
4. Start the application: `npm start` or `node index.js`
5. The server will run on `http://localhost:3000`

## API Endpoints
### User Routes
* `POST /api/v1/user/signup` - Register a new user
* `POST /api/v1/user/login` - Authenticate user

### Employee Routes
* `GET /api/v1/emp/employees` - Get all employees
* `POST /api/v1/emp/employees` - Create a new employee
* `GET /api/v1/emp/employees/:eid` - Get employee by ID
* `PUT /api/v1/emp/employees/:eid` - Update employee details
* `DELETE /api/v1/emp/employees?eid=xxx` - Delete an employee

### System
* `GET /health` - API Health Check