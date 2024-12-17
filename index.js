const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mock database
let books = [
  { BookID: 1, Title: 'Book One', Author: 'Author One', Genre: 'Fiction', Pages: 200, PublishedDate: '2020-01-01' },
  { BookID: 2, Title: 'Book Two', Author: 'Author Two', Genre: 'Non-Fiction', Pages: 150, PublishedDate: '2019-05-10' },
];

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a single book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.BookID === parseInt(req.params.id));
  res.json(book || {});
});

// Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.BookID = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.BookID === parseInt(req.params.id));
  if (book) {
    Object.assign(book, req.body);
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.BookID !== parseInt(req.params.id));
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
