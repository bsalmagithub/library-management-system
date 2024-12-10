const express = require('express');
const { borrowBook, getBorrowRequests } = require('../controllers/borrowController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, borrowBook);
router.get('/', authMiddleware, getBorrowRequests);

module.exports = router;
