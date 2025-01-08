const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);  // 200 OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while fetching todos.' }); // 500 Internal Server Error
    }
});

// Add a new todo
router.post('/', async (req, res) => {
    const { title, description, completed } = req.body;

    // Validate input
    if (!title) {
        return res.status(400).json({ message: 'Title is required.' });  // 400 Bad Request
    }

    try {
        const todo = new Todo({
            title,
            description,
            completed: completed || false,  // Default to false if not provided
        });

        await todo.save();
        res.status(201).json(todo);  // 201 Created
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving todo.' });  // 500 Internal Server Error
    }
});

// Update a todo
router.put('/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    const todoId = req.params.id;

    // Validate input
    if (!title && completed === undefined) {
        return res.status(400).json({ message: 'At least one field (title or completed) is required to update.' });  // 400 Bad Request
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, { title, description, completed }, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found.' });  // 404 Not Found
        }

        res.status(200).json(updatedTodo);  // 200 OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating todo.' });  // 500 Internal Server Error
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    const todoId = req.params.id;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(todoId);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found.' });  // 404 Not Found
        }

        res.status(200).json({ message: 'Todo deleted successfully.' });  // 200 OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting todo.' });  // 500 Internal Server Error
    }
});

module.exports = router;
