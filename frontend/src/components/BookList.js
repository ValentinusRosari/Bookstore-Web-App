import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/books');
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }