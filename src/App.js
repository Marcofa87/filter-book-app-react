import React, { useState } from 'react';
import { items } from './book-json/Books';
import './App.css';
import BookFilter from './components/filter/BookFilter'
import MediaCard from './components/card/Card';

function App() {
  const [books, setBooks] = useState(items);

  const handleFilterChange = (filterType) => {
    let sortedBooks = [];
    if (filterType === "title") {
      sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
      console.log("Ciao");
    } else if (filterType === "author") {
      sortedBooks = [...books].sort((a, b) => a.author.localeCompare(b.author));
      console.log("Ciao");
    } else if (filterType === "price") {
      sortedBooks = [...books].sort((a, b) => a.price - b.price);
      console.log("Ciao");
    } else if (filterType === "releaseDate") {
      sortedBooks = [...books].sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
      console.log("Ciao");
    } else {
      sortedBooks = [...books];
    }

    setBooks(sortedBooks);
  }

  return (
    <div className='app'>
      <h1>Books List:</h1>
      <BookFilter handleFilterChange={handleFilterChange} />
      <MediaCard books={books} />
    </div>
  );
}

export default App;
