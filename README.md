
# Library Management System

## Overview

The Library Management System (LMS) is a Node.js-based backend application that allows users and librarians to manage books, borrow requests, and borrow history. The system supports authentication using JWT tokens and allows librarians to approve or deny borrow requests.

## Features

- **User Authentication**: Uses JWT-based authentication to ensure secure access to APIs.
- **Book Management**: Allows the addition, updating, and deletion of books.
- **Borrow Management**: Users can submit borrow requests


## Installation

### Prerequisites

- Node.js (v14 or above)
- MySQL or SQLite database

### Steps to Install

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-repository-url
   cd library-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file in the root of the project with your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=root
   DB_NAME=library
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- **POST /api/auth/login**: Log in and get a JWT token.
   - Request body:
     ```json
     {
       "email": "user@example.com",
       "password": "password"
     }
     ```
   - Response:
     ```json
     {
       "token": "your_jwt_token"
     }
     ```

### Books

- **GET /api/books**: Get a list of all books (requires JWT token).
- **POST /api/books**: Add a new book (requires JWT token).
   - Request body:
     ```json
     {
       "title": "Book Title",
       "author": "Author Name",
       "quantity": 10
     }
     ```

### Borrow Requests

- **POST /api/borrow-requests**: Submit a borrow request (requires JWT token).
   - Request body:
     ```json
     {
       "book_id": 1,
       "start_date": "2024-12-01",
       "end_date": "2024-12-15"
     }
     ```

- **GET /api/borrow-requests**: Get all borrow requests (librarian only).



## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **MySQL**: MySQL database client for interacting with the database.
- **JWT**: JSON Web Token for user authentication.




