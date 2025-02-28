// bookshelf-app/server/server.js

// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Import routes
const booksRouter = require('./routes/books-route')
const { func } = require('prop-types')

// Set default port for express app
const PORT = process.env.PORT || 4001

// Create express app
const app = express()

// Apply middleware
// Note: Keeps this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Implement books-route
app.use('/books', booksRouter)

// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.srack)
    req.status(500).send('Something is broken.')
})

// Implement 404 error route
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
})

//Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})