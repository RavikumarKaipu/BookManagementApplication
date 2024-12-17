import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-results?query=${searchQuery}&genre=${genreFilter}`);
  };

  return (
    <div className="home">
     <Navbar/>
      <h1>Welcome to the Book Management System</h1>
      <p>Manage your book collection with ease. Search, add, update, and delete your favorite books.</p>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for a book..." 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)} 
        />
        <select onChange={e => setGenreFilter(e.target.value)}>
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="quick-links">
        <h3>Quick Access</h3>
        <ul>
          <li><Link to="/add-book">Add a New Book</Link></li>
          <li><Link to="/books-list">View All Books</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
