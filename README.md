# 
Backend API for a MERN-based Todo application

# 📚 Mern Todo Backend Application (mern-todo-backend)

Backend API for a **MERN-based Todo application** built with **Node.js** and **Express**. It allows users to manage their tasks by **adding, editing, marking as completed, and deleting them.** The tasks are persisted in **MongoDB**, so they remain available even after page reloads or when accessed from different devices.

---

## 🚀 **Features**
- **Add, Edit, and Delete Tasks**: Users can manage tasks with basic **CRUD** (Create, Read, Update, Delete) operations.
- **Mark Tasks as Completed**: Users can mark tasks as completed, and completed tasks will be visually indicated with a strikethrough.
- **Filter Tasks**: Filter tasks based on completion status (All, Completed, or Pending).
- **Persistent Data**: Tasks are stored in MongoDB and persist even after page reloads. 

---

## 🛠️ **Installation**
### 1. **Clone the Repository**
```bash
git clone https://github.com/sajidsajad/mern-todo-backend.git
cd mern-todo-backend
```

### 2. **Install Dependencies**
```bash
Make sure npm and node is installed and then run 
npm init -y and then
npm install express mongoose dotenv cors body-parser mongodb

that will install following packages:
express: Web framework for building the API.
body-parser: Middleware for parsing incoming request bodies.
cors: Middleware for enabling Cross-Origin Request Sharing.
dotenv: For loading environment variables from a .env file.
mongodb: is a NoSQL database that stores data in flexible, JSON-like documents.
mongoose: is an ODM "Object Data Modeling" library for MongoDB and Node.js, providing schema-based solutions to model and manage application data.

```

### 3. **your .env file**
```bash
Your env file must be like this:
MONGO_URI=mongodb+srv://<yourMongoAtlasDbUsername>:<yourMongoAtlasDbPassword>@clustertodo.4yhl9.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=<clusterName>

Replace it with your values
```
### 4. **Start the application**
```bash
use Node: Run node server.js
node: Starts the server but does not watch for file changes.

Or

use Nodemon: Run nodemon server.js
nodemon: Starts the server and watches for changes in the source code, automatically restarting the server when necessary.
```

### 5. **Endpoints Summary**


| Method | Endpoint                     | Description                               |
|--------|------------------------------|-------------------------------------------|
| GET    | `/api/todos`                 | Get all todos                             |
| POST   | `/api/todos`                 | Add todo                                  |
| PUT    | `/api/todos/:id`             | Update a todo                             |
| DELETE | `/api/todos/:id`             | Delete a todo                             |
