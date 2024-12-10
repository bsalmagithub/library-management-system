const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Adjust as needed
    queueLimit: 0,       // Unlimited queue for requests
});

// Test database connection
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database successfully!');
        connection.release(); // Release the connection back to the pool
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
})();

module.exports = pool;
