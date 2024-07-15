//Routes
    // Routes takes the requests from the client,
    // and sends it to the correct controller.

// bookshelf-app/server/routes/books-route.js

// Import express
const express = require('express')

// Import books-controller
const booksRoutes = require('./../controllers/books-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
router.get('/all', booksRoutes.booksAll)

// Add route for POST request to create new book
// In server.js, books route is specified as '/books'
// this means that '/create' translates to '/books/create'
router.post('/create', booksRoutes.booksCreate)

// Add route for PUT request to remove a specific book
// In service.js, books route is specified as '/books'
//  this means that '/delete' translates to 'books/delete
router.put('/delete', booksRoutes.booksDelete)

// Add route for PUT request to remove all books
// In service.js, books route is specified as '/books'
//  this means that '/reset' translates to 'books/reset
router.put('/reset', booksRoutes.booksReset)


// Export router
module.exports = router
