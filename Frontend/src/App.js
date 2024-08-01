import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateBook from './CreateBook';
import EditBook from './EditBook';
import ShowBook from './ShowBook';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [books, setBooks] = useState([]);
  const URL = "http://localhost:8000/";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div> 
           <Header  />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
          <Route path="/details/:id" element={<ShowBook books={books} />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>


          {/* <Route path="/delete/:id" element={<DeleteBook books={books} setBooks={setBooks} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
