
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import Contact from './components/Contact';
import About from './components/About';
import SearchResults from './components/SearchResults';
import AddEditBook from './components/AddBook';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books-list" element={<BooksList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<AddEditBook />} />

      </Routes>
    </Router>
  );
};

export default App;
