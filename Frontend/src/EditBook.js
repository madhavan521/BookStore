import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  

const EditBook = () => {  
  const { id } = useParams();  

  const [title, setTitle] = useState('');  
  const [author, setAuthor] = useState('');  
  const [year, setYear] = useState('');  
  const [imageurl,setImageurl]=useState('')
  useEffect(() => {  
       fetch(`http://localhost:8000/${id}`)
       .then(res=>res.json())
       .then(data=>{
        setTitle(data.name);  
        setAuthor(data.author);  
        setYear(data.releaseDate);  
        setImageurl(data.imageurl);})

  }, [id]);  

  const handleSubmit = () => {  

    const bookData = {  
      name: title,  
      author: author,  
      releaseDate: year,  
      imageurl:imageurl,  
    };  

     fetch(`http://localhost:8000/${id}`, {  
      method: 'PUT',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      body: JSON.stringify(bookData),  
    });  
 
  };  

  return (  
    <div>  
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
          Publisher  
          <input  
            type="text"  
            id="publisher"  
            className='input-group w-4'  
            value={imageurl}  
            onChange={(e) => setImageurl(e.target.value)}  
          />  
        </label>  
        <button type="submit" className='btn btn-success d-flex justify-content-center align-items-center mt-3'>  
          Save Changes  
        </button>  
      </form>  
    </div>  
  );  
};  

export default EditBook;