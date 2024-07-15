// bookshelf-app/server/controllers/books-controller.js

// Controllers
    // Controllers define functions that the server uses 
    // to process requests coming to specific API endpoints
    // So, when in your React app you fetch endpoint 
    // to get all books on your bookshelf list, 
    // the response you will receive will be created 
    // by one of these functions.

// Import database
const knex = require('./../db')

//Retrieve all books
exports.booksAll = async (req, res) => {
    // Get all books from database
    knex
        .select('*') //select all records
        .from('books') //from 'books' table
        .then(userData => {
            // Send books extracted from database in reponse
            res.json(userData)
        })
        .catch(err => {
            // Send a error message in response
            res.json({ message: `There was an error retrieving books: ${err}`})
        })
}

//Create new book
exports.booksCreate = async (req, res) => {
    //Add new book to database
    knex('books')
        .insert({ //insert new record
            'author': req.body.author,
            'title': req.body.title,
            'pubDate': req.body.pubDate,
            'rating': req.body.rating
        })
        .then(() => {
            //Send a success message in response
            res.json({ message: `Book \'${req.body.title}\' by ${req.body.author} created.`})
        })
        .catch(err => {
            //Send an error message in response
            res.json({ message: `There was an error creating ${req.body.title} book: ${err}.`})
        })
}

//Remove specific book
exports.booksDelete = async (req, res) => {
    //Find specific boook in the database and remove it
    knex('books')
        .where('id', req.body.id) // find correct record based on id
        .del() // delete the record
        .then(() => {
            //Send a success message in response 
            res.json({ message:`Book ${req.body.id} deleted.`})
        })
        .catch(err => {
            //Send a error message in response
            res.json({ message: `There was an error deleting ${req.body.id} book ${req.body.title}: ${err}`})
        })
}

//Remove all books on the list
exports.booksReset = async (req, res) => {
    //Remove all books fro, database
    knex('books')
        .select('*') //select all records
        .from('books') //from 'books' table
        .truncate() //remove the selection
        .then(() => {
            //Send a success message in response
            res.json({ message: 'Book list cleared.' })
        })
        .catch(err => {
            //Send an error message in response
            res.json({ message: `There was an error resetting book list: ${err}.` })
        })
}