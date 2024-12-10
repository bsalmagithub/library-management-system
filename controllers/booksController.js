const db = require('../models/db'); 

// Fetch all books
const getAllBooks = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM books');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

// Add a new book
const addBook = async (req, res) => {
    const { title, author, quantity } = req.body;

    if (!title || !author || quantity == null) {
        return res.status(400).json({ error: 'Title, author, and quantity are required' });
    }

    try {
        await db.query('INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)', [title, author, quantity]);
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add book' });
    }
};

module.exports = { getAllBooks, addBook };
