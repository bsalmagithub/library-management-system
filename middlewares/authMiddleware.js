const jwt = require('jsonwebtoken');
const pool = require('../models/db');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user exists in the database
        const [users] = await pool.query('SELECT * FROM Users WHERE id = ?', [decoded.id]);

        if (!users.length) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        // Attach the user to the request object
        req.user = users[0];

        next();
    } catch (error) {
        // Provide a specific error message depending on the error
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Unauthorized: Token expired' });
        }
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = authMiddleware;
