const pool = require('../models/db');

const borrowBook = async (req, res) => {
    const { book_id, start_date, end_date } = req.body;

    try {
        await pool.query(
            'INSERT INTO BorrowRequests (user_id, book_id, start_date, end_date) VALUES (?, ?, ?, ?)',
            [req.user.id, book_id, start_date, end_date]
        );
        res.status(201).json({ message: 'Borrow request submitted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBorrowRequests = async (req, res) => {
    try {
        const [requests] = await pool.query('SELECT * FROM BorrowRequests');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { borrowBook, getBorrowRequests };
