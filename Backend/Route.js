const express = require('express');
const route = express.Router();
const Book = require('./BookSchema');

// Create a new book
route.post('/', async (req, res) => {
  const { name, author, releaseDate, publisher,imageurl } = req.body;
  try {
    const newBook = new Book({ name, author, releaseDate, publisher,imageurl });
    await newBook.save();
    res.status(200).send(newBook);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get book details by ID
route.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).send(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all books
route.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update book details by ID
route.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).send(updatedBook);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a book by ID
route.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.status(200).send({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = route;
