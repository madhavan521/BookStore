import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const[imageurl,setImageurl]=useState('')
  const navigate=useNavigate()

  const handleSubmit = async () => {
    const bookData = {
      name: title,
      author: author,
      releaseDate: year,
      imageurl:imageurl
    };
     fetch("http://localhost:8000/",{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(bookData)
     })

    setAuthor('')
    setImageurl('')
    setTitle('')
    setYear('')
    navigate('/')
    
  }


  return (
    <div>
    <div className='ms-3 my-2'>
      <a href="/"><bold>Back to Home</bold></a>
    </div>
      <form action="/" onSubmit={handleSubmit} className='form form-control'>
        <label htmlFor="title" className='input-group'>
          Title
          <input
            type="text"
            id="title"
            className='input-group'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author" className='input-group mt-5'>
          Author
          <input
            type="text"
            id="author"
            className='input-group'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label htmlFor="year" className='input-group mt-5'>
          Year
          <input
            type="text"
            id="year"
            className='input-group'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label htmlFor="publisher" className='input-group mt-5'>
          Imageurl
          <input
            type="text"
            id="publisher"
            className='input-group w-4'
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
        </label>
        <button type="submit" action="/" className='btn btn-success d-flex justify-content-center align-items-center mt-3'>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
