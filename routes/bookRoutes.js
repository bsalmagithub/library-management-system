const express = require('express');
const { getAllBooks, addBook } = require('../controllers/booksController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// GET /api/books - Fetch all books
router.get('/', authMiddleware, getAllBooks);

// POST /api/books - Add a new book
router.post('/', authMiddleware, addBook);

module.exports = router;
